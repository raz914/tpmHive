import { NextResponse } from "next/server"
import { headers } from "next/headers"

export const runtime = "edge"

interface TurnstileVerificationRequest {
  token?: string
}

interface TurnstileVerificationResponse {
  success: boolean
  "error-codes"?: string[]
}

export async function POST(request: Request) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return NextResponse.json(
      {
        success: false,
        error: "Turnstile secret key is not configured on the server.",
      },
      { status: 500 }
    )
  }

  let body: TurnstileVerificationRequest

  try {
    body = await request.json()
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request body.",
      },
      { status: 400 }
    )
  }

  const token = body?.token

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing verification token.",
      },
      { status: 400 }
    )
  }

  const headerList = headers()
  const forwardedFor = headerList.get("x-forwarded-for")?.split(",")[0]?.trim()
  const connectingIp = headerList.get("cf-connecting-ip")?.trim()
  const remoteIp = connectingIp || forwardedFor

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
        body: formData,
        cache: "no-store",
      }
    )

    if (!verifyResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to reach Turnstile verification service.",
        },
        { status: 502 }
      )
    }

    const payload = (await verifyResponse.json()) as TurnstileVerificationResponse

    if (!payload.success) {
      return NextResponse.json(
        {
          success: false,
          error: payload["error-codes"]?.join(", ") || "Verification failed.",
        },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Turnstile verification error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Unexpected error verifying Turnstile token.",
      },
      { status: 500 }
    )
  }
}

