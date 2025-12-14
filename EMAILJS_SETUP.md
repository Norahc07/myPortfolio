# EmailJS Setup Guide

This guide will help you configure EmailJS so that messages from the contact form are sent to your email: **luigiamarillo007@gmail.com**

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add Email Service

1. Once logged in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or another email provider
4. **Important Steps for Gmail Connection:**
   - Click **"Connect Account"** button
   - Select or sign in with your Gmail account (luigiamarillo007@gmail.com)
   - **CRITICAL:** When Google asks for permissions, make sure to:
     * ✅ Check "Send email on your behalf" 
     * ✅ Grant ALL requested permissions
     * ✅ Do NOT uncheck any permission boxes
     * ✅ Click "Allow" to grant full access
   - If you see a warning about "Less secure app access", you may need to enable 2-Step Verification and create an App Password (see troubleshooting below)
5. After connection, test the service using the "Send test email" button
6. Note down your **Service ID** (e.g., `service_abc123`)

**Current Service ID:** service_y5yrqbs

**⚠️ If you get "412 - insufficient authentication scopes" error:**
- The service needs to be deleted and recreated
- Make sure you grant ALL permissions during the Google OAuth flow
- Sometimes this happens if permissions were partially granted the first time

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Portfolio Contact Form

**Subject:** New Message from Portfolio: {{subject}}

**Content:** (Select "HTML" format in EmailJS template editor)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Portfolio Message</title>
    <style type="text/css">
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Mobile responsive styles */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                max-width: 100% !important;
                margin: 10px auto !important;
            }
            .email-wrapper {
                padding: 20px 15px !important;
            }
            .email-content {
                padding: 30px 25px !important;
            }
            .email-header {
                padding: 25px 25px !important;
            }
            .email-header h1 {
                font-size: 20px !important;
            }
            .email-header p {
                font-size: 13px !important;
            }
            .email-footer {
                padding: 20px 25px !important;
            }
            .info-card {
                padding: 18px !important;
            }
            .message-box {
                padding: 20px !important;
            }
            .reply-button-wrapper {
                padding: 20px 0 !important;
            }
            .reply-button-wrapper table {
                width: 100% !important;
            }
            .reply-button-wrapper td {
                width: 100% !important;
                padding: 0 !important;
            }
            .reply-button {
                width: 100% !important;
                max-width: 100% !important;
                display: block !important;
                padding: 14px 16px !important;
                font-size: 14px !important;
                box-sizing: border-box !important;
                -webkit-box-sizing: border-box !important;
                -moz-box-sizing: border-box !important;
                word-wrap: break-word !important;
                overflow-wrap: break-word !important;
                white-space: normal !important;
                text-align: center !important;
                min-width: 0 !important;
            }
            .intro-text {
                font-size: 14px !important;
            }
            .info-label {
                font-size: 11px !important;
            }
            .info-value {
                font-size: 14px !important;
            }
            .message-text {
                font-size: 14px !important;
                line-height: 1.6 !important;
            }
        }
        
        /* Very small phones (320px - 375px) */
        @media only screen and (max-width: 375px) {
            .email-container {
                margin: 5px auto !important;
                border-radius: 8px !important;
            }
            .email-content {
                padding: 25px 20px !important;
            }
            .email-header {
                padding: 20px 20px !important;
            }
            .email-header h1 {
                font-size: 18px !important;
            }
            .email-header p {
                font-size: 12px !important;
            }
            .info-card {
                padding: 15px !important;
            }
            .message-box {
                padding: 18px !important;
            }
            .reply-button-wrapper {
                padding: 15px 0 !important;
            }
            .reply-button-wrapper table {
                width: 100% !important;
            }
            .reply-button-wrapper td {
                width: 100% !important;
                padding: 0 !important;
            }
            .reply-button {
                width: 100% !important;
                max-width: 100% !important;
                padding: 12px 14px !important;
                font-size: 13px !important;
                letter-spacing: 0.3px !important;
                line-height: 1.4 !important;
                box-sizing: border-box !important;
                -webkit-box-sizing: border-box !important;
                -moz-box-sizing: border-box !important;
                word-wrap: break-word !important;
                overflow-wrap: break-word !important;
                white-space: normal !important;
                min-width: 0 !important;
            }
            .email-footer {
                padding: 18px 20px !important;
            }
            .email-footer p {
                font-size: 12px !important;
            }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #1f2937 !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    <!-- Outer wrapper table -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; margin: 0; padding: 0;">
        <tr>
            <td align="center" style="padding: 0; margin: 0;">
                <!-- Main email container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="email-container" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 20px auto;">
                    <!-- Header -->
                    <tr>
                        <td class="email-header" style="background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%); padding: 30px 40px; text-align: center; -webkit-border-radius: 12px 12px 0 0; -moz-border-radius: 12px 12px 0 0; border-radius: 12px 12px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; line-height: 1.3;">Portfolio Contact Form</h1>
                            <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.95; line-height: 1.5;">New Message Received</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td class="email-content" style="padding: 40px;">
                            <p style="margin: 0 0 20px 0; color: #1f2937; font-size: 16px; line-height: 1.6; font-weight: 500;">
                                Hello Luigi,
                            </p>
                            
                            <p class="intro-text" style="margin: 0 0 30px 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                                You have received a new message from your portfolio.
                            </p>
                            
                            <!-- Sender Information Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #eab308; margin-bottom: 30px; width: 100%;">
                                <tr>
                                    <td class="info-card" style="padding: 20px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding-bottom: 12px;">
                                                    <p class="info-label" style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">From</p>
                                                    <p class="info-value" style="margin: 4px 0 0 0; color: #1f2937; font-size: 16px; font-weight: 600; word-break: break-word;">{{from_name}}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 12px; padding-top: 12px; border-top: 1px solid #e5e7eb;">
                                                    <p class="info-label" style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email</p>
                                                    <p style="margin: 4px 0 0 0;">
                                                        <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none; font-size: 15px; word-break: break-all; line-height: 1.5;">{{from_email}}</a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-top: 12px; border-top: 1px solid #e5e7eb;">
                                                    <p class="info-label" style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Subject</p>
                                                    <p class="info-value" style="margin: 4px 0 0 0; color: #1f2937; font-size: 15px; word-break: break-word; line-height: 1.5;">{{subject}}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message Content -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 30px; width: 100%;">
                                <tr>
                                    <td class="message-box" style="padding: 25px;">
                                        <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</p>
                                        <div class="message-text" style="color: #374151; font-size: 15px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word; overflow-wrap: break-word;">{{message}}</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Call to Action -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td class="reply-button-wrapper" align="center" style="padding: 20px 0;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td align="center" style="padding: 0;">
                                                    <a href="mailto:{{reply_to}}?subject=Re: {{subject}}" class="reply-button" style="display: block; width: 100%; max-width: 100%; padding: 14px 32px; background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; letter-spacing: 0.5px; text-align: center; -webkit-text-size-adjust: none; mso-hide: all; box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; word-wrap: break-word; white-space: normal; line-height: 1.4;">Reply to {{from_name}}</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td class="email-footer" style="background-color: #f9fafb; padding: 25px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; line-height: 1.5;">
                                This email was sent from your portfolio contact form.
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.5;">
                                © 2024 Luigi Amarillo Portfolio
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

**Settings:**
- **Subject:** `New Message from Portfolio: {{subject}}` (or any format you prefer)
- **To Email:** `luigiamarillo007@gmail.com`
- **From Name:** `Portfolio Contact Form` (use a static name - this is the sender name shown in your inbox, NOT the form submitter's name)
- **From Email:** Use Default Email Address (EmailJS will use your service email)
- **Reply To:** `{{from_email}}` or `{{reply_to}}` (MUST be an email address variable - this is where replies will go, i.e., to the person who filled out the form)
- **Bcc:** (leave empty)
- **Cc:** (leave empty)
- **Template ID:** Note this down (e.g., `template_hye0d4p`)

**Important Notes:**
- ❌ **DO NOT** use `{{from_name}}` for "Reply To" - Reply To requires an **email address**, not a name
- ✅ **DO** use a static name like "Portfolio Contact Form" for "From Name" - this is who the email appears to be FROM in your inbox
- ✅ **DO** use `{{from_email}}` or `{{reply_to}}` for "Reply To" - this ensures when you click reply, it goes to the person who submitted the form

4. Note down your **Template ID** (e.g., `template_xyz789`)

- template ID: template_hye0d4p

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (API Key) under the API Keys section
3. Copy the Public Key

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root directory of your project (same level as `package.json`)
2. Add the following content:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual:
   - Service ID from Step 2
   - Template ID from Step 3
   - Public Key from Step 4

**Example:**
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Restart Development Server

After creating/updating the `.env` file:
1. Stop your development server (Ctrl+C)
2. Restart it with `npm start`
3. The environment variables will be loaded

## Testing

1. Go to your contact page
2. Fill out the form and submit
3. Check your email inbox (luigiamarillo007@gmail.com)
4. You should receive the message!

## Troubleshooting

### Common Issues:

- **"EmailJS is not configured" error**: Make sure your `.env` file exists and has the correct variable names starting with `REACT_APP_`

- **"Gmail_API: Request had insufficient authentication scopes" (Error 412)**:
  
  This error means Google didn't grant all required permissions. **You MUST delete and recreate the service:**
  
  1. Go to your EmailJS dashboard → **Email Services**
  2. **Delete** the existing Gmail service (service_y5yrqbs)
     - Click on the service
     - Click "Delete" or "Remove Service"
     - Confirm deletion
  3. **Create a NEW Gmail service:**
     - Click **"Add New Service"**
     - Choose **"Gmail"**
     - Click **"Connect Account"**
  4. **IMPORTANT - Grant ALL permissions:**
     - Sign in with your Gmail (luigiamarillo007@gmail.com)
     - When Google shows the permission screen, **check ALL boxes:**
       * ✅ "Send email on your behalf" (REQUIRED)
       * ✅ "See, edit, send, and delete all your emails" (if shown)
       * ✅ Any other permissions Google requests
     - **DO NOT** uncheck any permissions
     - Click **"Allow"** or **"Continue"**
  5. **Test the connection:**
     - Use the "Send test email" button in EmailJS
     - Verify you receive the test email
  6. **Update your configuration:**
     - Note down the NEW Service ID
     - Update your `.env` file with the new Service ID
     - Restart your development server (`npm start`)
  
  **Why this happens:** If permissions were partially denied the first time, Google won't allow EmailJS to request them again. Deleting and recreating forces a fresh OAuth flow.
  
  **If the error persists after recreation:**
  - Make sure 2-Step Verification is enabled on your Google account
  - Check if your Google account has any security restrictions
  - Try using a different email provider (Outlook, Yahoo) as a temporary workaround

- **Email not received**: Check your spam folder, verify EmailJS service is connected, and check EmailJS dashboard for any errors

- **Build issues**: Make sure to add `.env` to `.gitignore` (it should already be there) to keep your keys secure

## Security Note

⚠️ **Important**: Never commit your `.env` file to version control. It's already in `.gitignore`, but double-check before pushing to GitHub.

