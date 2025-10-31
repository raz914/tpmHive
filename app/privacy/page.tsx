"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Menu, ArrowLeft } from "lucide-react"
import { PrivacyPolicy } from "@/components/privacy-policy"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Link from "next/link"

export default function PrivacyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#brands", label: "Brands" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background relative z-10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border hover-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="TPM HIVE Logo"
              width={150}
              height={150}
              className="h-26 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 px-8" aria-describedby="mobile-menu-description">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <p id="mobile-menu-description" className="sr-only">
                Main navigation menu for TPM HIVE website
              </p>
              <div className="flex flex-col gap-8 mt-16">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors hover:translate-x-2 transform duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-20 bg-background">
        <PrivacyPolicy />
      </section>

      <Footer sectionLinkPrefix="/" />
    </div>
  )
}

