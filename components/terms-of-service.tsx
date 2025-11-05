export function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Terms of Service</h1>
        <p className="text-muted-foreground text-lg">
          Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="prose prose-lg max-w-none space-y-8 text-foreground">
        <section className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service ("Terms") govern your use of TPM HIVE's wholesale services and website operated by THEPEPPERMINT LTD ("Company", "we", "us", or "our"). By accessing or using our services, you agree to be bound by these Terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you disagree with any part of these terms, then you may not access our services. These Terms apply to all visitors, users, and others who access or use our wholesale services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">1. ACCEPTANCE OF TERMS</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using TPM HIVE's wholesale services, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using our services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">2. WHOLESALE ACCOUNT REQUIREMENTS</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              To access our wholesale services, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Be a legitimate business entity with valid business registration</li>
              <li>Provide accurate and complete business information</li>
              <li>Have a valid business tax identification number</li>
              <li>Meet our minimum order requirements</li>
              <li>Agree to our credit terms and payment conditions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to approve or reject wholesale account applications at our sole discretion.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">3. PRODUCTS AND SERVICES</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              TPM HIVE provides wholesale distribution services for beauty and healthcare products. We offer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Premium beauty and healthcare product lines</li>
              <li>Competitive wholesale pricing</li>
              <li>Bulk order fulfillment</li>
              <li>Product sourcing and procurement</li>
              <li>Account management and support</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Product availability, pricing, and specifications are subject to change without notice. We reserve the right to discontinue any product at any time.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">4. PRICING AND PAYMENT TERMS</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              All prices are quoted in British Pounds (GBP) and are exclusive of VAT unless otherwise stated. Payment terms are as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Net 30 days for approved wholesale accounts</li>
              <li>Payment must be made by bank transfer or approved credit terms</li>
              <li>Late payments may incur additional charges as specified in our credit agreement</li>
              <li>We reserve the right to require payment in advance for new accounts or large orders</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Prices are subject to change without notice. All orders are subject to credit approval.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">5. ORDERS AND FULFILLMENT</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Order processing and fulfillment terms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>All orders must be placed through our approved channels</li>
              <li>Minimum order quantities may apply</li>
              <li>Orders are subject to product availability</li>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>We reserve the right to cancel orders due to product unavailability</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Risk of loss and title to products pass to you upon delivery to the carrier.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">6. RETURNS AND EXCHANGES</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Returns and exchanges are subject to the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Returns must be authorized by TPM HIVE prior to shipment</li>
              <li>Products must be in original, unopened condition</li>
              <li>Returns must be made within 30 days of delivery</li>
              <li>Return shipping costs are the responsibility of the customer</li>
              <li>Restocking fees may apply</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to refuse returns that do not meet our return policy requirements.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">7. INTELLECTUAL PROPERTY</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              All content, trademarks, and intellectual property on our website and in our materials are owned by TPM HIVE or our licensors. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Use our trademarks or logos without written permission</li>
              <li>Copy, modify, or distribute our content</li>
              <li>Reverse engineer our products or services</li>
              <li>Use our intellectual property for unauthorized commercial purposes</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">8. PROHIBITED USES</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              You may not use our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">9. LIMITATION OF LIABILITY</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall TPM HIVE, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our total liability to you for all damages shall not exceed the amount you paid us for the services in the twelve (12) months preceding the claim.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">10. INDEMNIFICATION</h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree to defend, indemnify, and hold harmless TPM HIVE and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">11. TERMINATION</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and bar access to our services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you wish to terminate your account, you may simply discontinue using our services or contact us to close your account.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">12. GOVERNING LAW</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms shall be interpreted and governed by the laws of England and Wales. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">13. CHANGES TO TERMS</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">14. SEVERABILITY</h2>
          <p className="text-muted-foreground leading-relaxed">
            If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground pt-8 border-t border-border">15. CONTACT INFORMATION</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-card border border-border rounded-lg p-6 mt-4">
            <p className="text-foreground font-semibold mb-2">THEPEPPERMINT LTD</p>
            <p className="text-muted-foreground">TPM HIVE</p>
            <p className="text-muted-foreground mt-4">E-mail: info@tpmhive.com</p>
            <p className="text-muted-foreground">Contact No: +44 0114 308 8640</p>
          </div>
        </section>
      </div>
    </div>
  )
}
