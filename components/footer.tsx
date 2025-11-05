import Link from "next/link"

type FooterProps = {
  sectionLinkPrefix?: string
}

export function Footer({ sectionLinkPrefix = "" }: FooterProps) {
  const quickLinks = [
    { label: "Home", href: `${sectionLinkPrefix}#home` },
    { label: "About", href: `${sectionLinkPrefix}#about` },
    { label: "Services", href: `${sectionLinkPrefix}#services` },
  ]

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">TPM HIVE</h4>
            <p className="text-sm opacity-75">Premium beauty and healthcare wholesale partner</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm opacity-75">info@tpmhive.com</p>
            <p className="text-sm opacity-75">+44 0114 308 8640</p>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75 space-y-2">
          <p>&copy; 2025 THEPEPPERMINT LTD. All rights reserved.</p>
          <p>Company Registration Number: 13164741</p>
          <p>VAT Number: GB429016115</p>

        </div>
      </div>
    </footer>
  )
}

