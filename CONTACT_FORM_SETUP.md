# Contact Form Setup Instructions

## Overview
The contact form has been successfully implemented with email handling functionality. Visitors can now send messages directly to your email address.

## Features
- ✅ Form validation with user-friendly error messages
- ✅ Email sending via EmailJS (client-side) or SMTP (optional server-side)
- ✅ Turnstile CAPTCHA spam protection
- ✅ Success/error feedback with toast notifications
- ✅ Responsive design matching your website theme
- ✅ Professional email formatting

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in your project root with the variables you plan to use. The app supports both EmailJS (static deployments) and SMTP (Node-hosted deployments).

```env
# EmailJS Configuration (client-side email delivery)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Cloudflare Turnstile (required for the CAPTCHA widget)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key

# SMTP Configuration (optional server-side delivery)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@tpmhive.co.uk
SMTP_PASS=your-email-password
SMTP_FROM=info@tpmhive.co.uk
CONTACT_EMAIL=info@tpmhive.co.uk
```

> ℹ️ When deploying to Vercel/Netlify, add the variables above to the platform dashboard as well.

### 2. Turnstile CAPTCHA Setup
1. Sign in to [Cloudflare Turnstile](https://dash.cloudflare.com/turnstile) and create a widget for your domain.
2. Copy the generated **Site Key** and **Secret Key**, then paste them into `.env.local` as shown above.
3. During development, restart `npm run dev` after adding the keys. In production, redeploy so the new variables are available.
4. The CAPTCHA renders automatically inside the contact form. If the widget does not appear, double-check that `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set and exposed to the browser.

The form now validates Turnstile tokens through `app/api/turnstile/verify/route.ts` before sending any emails. Submissions without a valid token are rejected with user feedback.

### 3. Serverless/Edge Runtime Requirement
- Deploy the project to a platform that supports API routes (Vercel, Netlify Functions, Cloudflare Pages Functions, etc.).
- The Turnstile verification endpoint runs with the Edge runtime (`export const runtime = "edge"`). Edge-compatible platforms such as Vercel Edge Functions or Netlify Edge Functions are ideal.
- Static-only exports (`next export`) will not include the verification endpoint. If you must host statically, move the verification logic to an external serverless function and update the form to call that URL instead of `/api/turnstile/verify`.

### 4. Netlify Deployment Checklist
1. Commit the included `netlify.toml` that enables the official Next.js plugin.
2. In Netlify → Site Settings → Build & Deploy → Environment, add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`
   - (Optional SMTP variables if you plan to switch away from EmailJS)
   - Netlify’s secrets scanner flags any value it finds in the build output. Because these `NEXT_PUBLIC_` values must ship to the browser, they are not secrets. The provided `netlify.toml` automatically sets `SECRETS_SCAN_OMIT_KEYS` so the build succeeds.
3. Connect the repository to Netlify (or push to the linked branch) and trigger a deploy. The build command `npm run build` and publish directory `.next` are already declared.
4. The Netlify Next.js plugin will output the contact form as static pages and provision an Edge Function for `/api/turnstile/verify` automatically.
5. After deployment, open the live site, submit the form, and confirm the Turnstile widget issues tokens and emails arrive.

### 5. Hostinger Email Setup (Optional SMTP)
1. Use your Hostinger email credentials:
   - **SMTP Host**: `smtp.hostinger.com`
   - **Port**: `465`
   - **SSL/TLS**: Enabled (secure connection)
   - **Username**: `info@tpmhive.co.uk`
   - **Password**: `Tg5??|9=`

2. Make sure your Hostinger email account is active and accessible
3. The email will be sent from `info@tpmhive.co.uk` to `info@tpmhive.co.uk`

### 6. Gmail Setup (Alternative SMTP)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASS`

### 7. Alternative Email Providers (SMTP)
You can use any SMTP provider. Here are some common configurations:

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASS=your-password
```

### 8. Dependency Installation
Run the following after pulling the latest changes:

```bash
npm install
```

This installs the new Turnstile React integration (`@marsidev/react-turnstile`).

### 9. Testing
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Complete the Turnstile challenge and submit the form
4. Check your email for the message

## File Structure
```
components/
  └── contact-form.tsx          # Main contact form component
app/
  └── api/
      └── turnstile/
          └── verify/route.ts   # CAPTCHA verification endpoint
env.example                     # Environment variables template
types/
  └── react-turnstile.d.ts      # Module declaration for Turnstile component
```

## Customization

### Email Template
The email template can be customized in `app/api/contact/route.ts` around line 40-80.

### Form Fields
To add/remove form fields, modify:
1. The validation schema in `components/contact-form.tsx`
2. The form JSX in the same file
3. The email template in `app/api/contact/route.ts` (if using SMTP delivery)

### Styling
The form uses your existing UI components and follows your website's design system.

## Troubleshooting

### Common Issues
1. **"Failed to send email" error**
   - Check your SMTP credentials
   - Verify your email provider allows SMTP access
   - Check if 2FA is enabled and app password is used

2. **Form validation errors**
   - Ensure all required fields are filled
   - Check email format is valid

3. **Environment variables not loading**
   - Ensure `.env.local` is in the project root
   - Restart your development server after adding variables

### Support
If you encounter any issues, check the browser console and server logs for detailed error messages.

## Security Notes
- Never commit `.env.local` to version control
- Use app passwords instead of your main email password
- Consider implementing rate limiting for production use
- Validate and sanitize all form inputs (already implemented)

## Next Steps
1. Set up your environment variables
2. Test the form functionality
3. Deploy to production
4. Monitor email delivery and form submissions
