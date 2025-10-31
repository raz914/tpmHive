import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { MouseEffects } from "@/components/mouse-effects"
import { HexagonBackground } from "@/components/hexagon-background"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Toaster } from "@/components/ui/toaster"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TPM HIVE - Premium Beauty & Healthcare Wholesale Partner",
  description: "Your trusted partner for premium beauty and healthcare products. We deliver quality, reliability, and competitive pricing to fuel your business growth.",
  generator: "TPM HIVE",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MouseEffects />
        <HexagonBackground />
        <ScrollAnimations />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
