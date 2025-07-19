# Email Setup Guide for TPISSS Contact Form

This guide will help you set up the email functionality for the contact form.

## Prerequisites

1. A Gmail account
2. 2-Step Verification enabled on your Gmail account

## Setup Steps

### 1. Enable 2-Step Verification
- Go to your Google Account settings
- Navigate to Security
- Enable 2-Step Verification if not already enabled

### 2. Generate App Password
- Go to Google Account > Security
- Under "2-Step Verification", click on "App passwords"
- Select "Mail" and "Other (Custom name)"
- Enter a name like "TPISSS Website"
- Click "Generate"
- Copy the 16-character password

### 3. Configure Environment Variables
Edit the `.env.local` file in your project root:

```env
# Email Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-16-character-app-password
```

Replace:
- `your-gmail-address@gmail.com` with your actual Gmail address
- `your-16-character-app-password` with the app password you generated

### 4. Test the Setup
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check if you receive an email at `tpisss_school@hotmail.com`

## Troubleshooting

### Common Issues

1. **"Invalid login" error**
   - Make sure you're using an app password, not your regular Gmail password
   - Ensure 2-Step Verification is enabled

2. **"Authentication failed" error**
   - Double-check your email address and app password
   - Make sure there are no extra spaces in the `.env.local` file

3. **Emails not being sent**
   - Check the browser console for errors
   - Verify your `.env.local` file is in the project root
   - Restart your development server after changing environment variables

### Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- App passwords are more secure than regular passwords for this use case

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard
2. Use the same variable names: `EMAIL_USER` and `EMAIL_PASS`
3. Test the contact form after deployment

## Email Template

The contact form sends beautifully formatted HTML emails with:
- Contact details (name, email, phone, subject)
- The message content
- Timestamp in Indian Standard Time
- Professional styling

All feedback and contact form submissions will be sent to: `tpisss_school@hotmail.com` 