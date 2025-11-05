"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Leaf, Sparkles, Users, Menu, X } from "lucide-react"
import { BrandsCarousel } from "@/components/brands-carousel"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#brands", label: "Brands" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background relative z-10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border hover-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="TPM HIVE Logo"
              width={150}
              height={150}
              className="h-26 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
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
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors hover:translate-x-2 transform duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-scroll-animate>
              <div className="inline-block animate-fade-down">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Premium Wholesale Partner
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance animate-in">
                TPM HIVE
                <br />
                <span className="text-primary">Beauty & Healthcare</span>
                <br />
                Wholesale Excellence
              </h1>
              <p
                className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-in"
                style={{ animationDelay: "0.2s" }}
              >
                Your trusted partner for premium beauty and healthcare products. We deliver quality, reliability, and
                competitive pricing to fuel your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in" style={{ animationDelay: "0.4s" }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                >
                  <a href="#contact">Explore Products</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="hover-lift bg-transparent">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full animate-slide-right" data-scroll-animate>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-glow"></div>
              <Image
                src="/beauty-healthcare-products-wholesale.jpg"
                alt="Beauty and Healthcare Products"
                width={500}
                height={500}
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-scroll-animate>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-in">
              Why Choose TPM HIVE?
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in"
              style={{ animationDelay: "0.2s" }}
            >
              We combine quality, reliability, and competitive pricing to support your business success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover-lift animate-in"
              data-scroll-animate
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Curated selection of top-tier beauty and healthcare brands, ensuring your customers receive only the
                best products.
              </p>
              <Image
                src="/premium-beauty-products-cosmetics.jpg"
                alt="Premium Quality Products"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg mt-6"
              />
            </div>

            {/* Feature 2 */}
            <div
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover-lift animate-in"
              data-scroll-animate
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Dedicated Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our expert account managers provide personalized guidance, ensuring smooth ordering and exceptional
                service every step of the way.
              </p>
              <Image
                src="/customer-service-support-team.jpg"
                alt="Dedicated Support"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg mt-6"
              />
            </div>

            {/* Feature 3 */}
            <div
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover-lift animate-in"
              data-scroll-animate
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Competitive Pricing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic pricing designed to maximize your profit margins while maintaining the highest quality
                standards in the industry.
              </p>
              <Image
                src="/healthcare-wellness-products.jpg"
                alt="Competitive Pricing"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section with Carousel */}
      <section id="brands" className="py-20 md:py-32 bg-accent/5" data-scroll-animate>
        <BrandsCarousel />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left" data-scroll-animate>
              <Image
                src="/logo.png"
                alt="About TPM HIVE"
                width={500}
                height={500}
                className="w-full rounded-3xl shadow-xl hover-scale"
              />
            </div>
            <div className="space-y-6 animate-slide-right" data-scroll-animate>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Your Reliable Partner in Beauty & Healthcare Supply
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At TPM HIVE, we understand the unique demands of the beauty and healthcare wholesale market. With years
                of industry expertise, we've built strong relationships with leading brands and suppliers worldwide.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">
                    <strong>Extensive Inventory:</strong> Wide range of beauty and healthcare products to meet diverse
                    customer needs
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">
                    <strong>Fast Delivery:</strong> Efficient logistics ensuring timely order fulfillment
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">
                    <strong>Expert Sourcing:</strong> Carefully selected premium brands and products
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">
                    <strong>Flexible Terms:</strong> Customized solutions for businesses of all sizes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground" data-scroll-animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-in">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Partner with TPM HIVE?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join hundreds of businesses that trust us for their beauty and healthcare wholesale needs. Let's grow
            together.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90 hover-lift"
          >
            <a href="#contact">Get Started Today</a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">We'd love to hear from you. Reach out anytime.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+44 0114 308 8640</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@tpmhive.com</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
