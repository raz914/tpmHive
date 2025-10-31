# EmailJS Setup Guide for Static Sites

## Why EmailJS?

Since you're using static hosting (Hostinger), server-side API routes don't work. EmailJS sends emails directly from the browser, making it perfect for static sites.

## 🚀 Quick Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. **Add Email Service**:
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

2. **For Gmail**:
   - Service ID: `gmail`
   - Connect your Gmail account
   - Enable "Less secure app access" or use App Password

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. **Configure Email Headers**:
   - **From Name**: Leave as your default (e.g., "TPM HIVE Contact Form")
   - **From Email**: This will be your email service email (info@tpmhive.co.uk)
   - **Reply To**: **IMPORTANT** - Set this to `{{reply_to}}` or `{{from_email}}`
     - This is the key setting! It makes replies go to the visitor
     - Click on the Reply To field and enter: `{{reply_to}}`
   - **To Email**: Your email (info@tpmhive.co.uk)

4. **Email Subject**:
   ```
   Contact Form: {{subject}}
   ```

5. **Email Body Template**:
   ```
   New Contact Form Submission
   
   From: {{from_name}} ({{name}})
   Email: {{from_email}}
   Subject: {{subject}} ({{title}})
   
   Message:
   {{message}}
   
   ---
   This message was sent from the TPM HIVE website contact form.
   Click Reply to respond directly to {{from_name}}.
   ```

6. **Template Variables**:
   - `{{from_name}}` / `{{name}}` - Visitor's name (both available)
   - `{{from_email}}` / `{{email}}` - Visitor's email (both available)
   - `{{reply_to}}` - Reply-To email (visitor's email)
   - `{{subject}}` / `{{title}}` - Message subject (both available)
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (info@tpmhive.co.uk)

### 4. Get Your Keys
1. Go to "Account" → "General"
2. Copy your **Public Key**
3. Note your **Service ID** and **Template ID**

### 5. Update Environment Variables
Create `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Test the Form
1. Run `npm run dev`
2. Test the contact form
3. Check your email inbox

## 📧 Email Configuration

### Gmail Setup (Recommended)
1. **Enable 2-Factor Authentication**
2. **Generate App Password**:
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use App Password** in EmailJS service setup

### Other Email Providers
- **Outlook**: Use your regular password
- **Yahoo**: May need App Password
- **Custom SMTP**: Check provider documentation

## 🔧 Troubleshooting

### Common Issues
1. **"Service not found"** - Check Service ID
2. **"Template not found"** - Check Template ID
3. **"Invalid public key"** - Check Public Key
4. **"Email not sending"** - Check email service configuration

### Why Does "From" Show My Email?
- **This is normal behavior** - EmailJS uses your email service account to send emails
- The "From" field will always show your email (info@tpmhive.co.uk)
- **But the Reply-To field is set to the visitor's email**
- When you click "Reply", it will reply to the visitor automatically
- The visitor's name and email are clearly shown in the email body

### Testing Steps
1. Check browser console for errors
2. Verify all environment variables are set
3. Test with a simple email first
4. Check spam folder

## 💡 Benefits of EmailJS

- ✅ **Works with static sites** (no server needed)
- ✅ **Free tier available** (200 emails/month)
- ✅ **Easy setup** (no server configuration)
- ✅ **Reliable delivery** (professional service)
- ✅ **Template system** (customizable emails)

## 🚀 Deployment

1. **Build your site**: `npm run build && npm run export`
2. **Upload to Hostinger** (no API folder needed)
3. **Set environment variables** in your hosting panel (if supported)
4. **Test the live form**

## 📞 Support

If you need help:
1. Check EmailJS documentation
2. Verify your email service setup
3. Test with a simple template first
4. Check browser console for errors

The contact form will now work perfectly on your static Hostinger site!
