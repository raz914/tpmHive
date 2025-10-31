import type { Handler } from "@netlify/functions"

interface TurnstileVerificationResponse {
  success: boolean
  "error-codes"?: string[]
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        error: "Method not allowed",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  }

  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.error("Missing TURNSTILE_SECRET_KEY environment variable")
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: "Turnstile secret key is not configured on the server.",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  }

  let token: string | undefined

  try {
    const body = JSON.parse(event.body || "{}")
    token = body?.token
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        error: "Invalid request body.",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  }

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        error: "Missing verification token.",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  }

  const remoteIp =
    event.headers["client-ip"] ||
    event.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    event.headers["x-nf-client-connection-ip"]

  const formData = new URLSearchParams()
  formData.append("secret", process.env.TURNSTILE_SECRET_KEY)
  formData.append("response", token)
  if (remoteIp) {
    formData.append("remoteip", remoteIp)
  }

  try {
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    )

    if (!verifyResponse.ok) {
      return {
        statusCode: 502,
        body: JSON.stringify({
          success: false,
          error: "Unable to reach Turnstile verification service.",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    }

    const payload = (await verifyResponse.json()) as TurnstileVerificationResponse

    if (!payload.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: payload["error-codes"]?.join(", ") || "Verification failed.",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  } catch (error) {
    console.error("Turnstile verification error:", error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: "Unexpected error verifying Turnstile token.",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  }
}

export { handler }

