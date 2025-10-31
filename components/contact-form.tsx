"use client"

import { useState } from "react"
import { Turnstile } from "@marsidev/react-turnstile"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send, CheckCircle } from "lucide-react"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaKey, setCaptchaKey] = useState(0)
  const [captchaError, setCaptchaError] = useState<string | null>(null)
  const { toast } = useToast()

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const verificationEndpoint =
    process.env.NEXT_PUBLIC_TURNSTILE_VERIFY_URL || "/api/turnstile/verify"

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setIsSuccess(false)
    setCaptchaError(null)

    if (!captchaToken) {
      setCaptchaError("Please verify that you're human.")
      toast({
        title: "Verification required",
        description: "Complete the verification challenge before sending your message.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const verificationResponse = await fetch(verificationEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: captchaToken }),
      })

      const verificationResult = await verificationResponse.json()

      if (!verificationResponse.ok || !verificationResult.success) {
        const errorMessage =
          verificationResult?.error || "Verification failed. Please try again."

        setCaptchaError(errorMessage)
        setIsSubmitting(false)
        setCaptchaToken(null)
        setCaptchaKey((prev) => prev + 1)
        toast({
          title: "Verification failed",
          description: "Please complete the challenge again before resubmitting.",
          variant: "destructive",
        })
        return
      }
    } catch (error) {
      console.error("Error verifying turnstile challenge:", error)
      setCaptchaError("Verification failed. Please try again.")
      setIsSubmitting(false)
      setCaptchaToken(null)
      setCaptchaKey((prev) => prev + 1)
      toast({
        title: "Verification error",
        description: "Unable to verify the challenge. Please try again.",
        variant: "destructive",
      })
      return
    }

    try {
      // Initialize EmailJS with your service ID
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          // Preferred variable names used in the project
          from_name: data.name,
          from_email: data.email,
          reply_to: data.email, // Set Reply-To to visitor's email
          subject: data.subject,
          message: data.message,
          to_email: "info@tpmhive.co.uk",

          // Additional aliases for template compatibility
          name: data.name,
          email: data.email,
          title: data.subject,
        }
      )

      if (result.status === 200) {
        setIsSuccess(true)
        reset()
        setCaptchaToken(null)
        setCaptchaKey((prev) => prev + 1)
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. We'll get back to you soon.",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
      setCaptchaToken(null)
      setCaptchaKey((prev) => prev + 1)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={`space-y-6 text-center ${className}`}>
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for your message. We'll get back to you within 24 hours.
          </p>
        </div>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="w-full"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Your Name"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            placeholder="What's this about?"
            {...register("subject")}
            className={errors.subject ? "border-destructive" : ""}
          />
          {errors.subject && (
            <p className="text-sm text-destructive">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            placeholder="Tell us more about your inquiry..."
            rows={4}
            {...register("message")}
            className={errors.message ? "border-destructive" : ""}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Verification *</Label>
        {siteKey ? (
          <div className="flex justify-center">
            <Turnstile
              key={captchaKey}
              siteKey={siteKey}
              onSuccess={(token: string) => {
                setCaptchaToken(token)
                setCaptchaError(null)
              }}
              onExpire={() => {
                setCaptchaToken(null)
                setCaptchaError("Verification expired. Please try again.")
              }}
              onError={() => {
                setCaptchaToken(null)
                setCaptchaError("Verification failed to load. Please refresh and try again.")
              }}
            />
          </div>
        ) : (
          <p className="text-sm text-destructive">
            Turnstile site key is missing. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to your
            environment configuration.
          </p>
        )}
        {captchaError && <p className="text-sm text-destructive">{captchaError}</p>}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
