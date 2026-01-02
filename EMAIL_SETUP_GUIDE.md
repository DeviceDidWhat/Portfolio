# Email Integration Setup Guide

This guide will help you configure the contact form to send emails to kavyabhanvadia@gmail.com.

## Prerequisites

- A Gmail account (kavyabhanvadia@gmail.com or another Gmail account)
- Node.js and npm installed

## Step 1: Enable Gmail App Password

Since Gmail has security restrictions, you need to create an App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Once 2-Step Verification is enabled, go back to **Security**
5. Look for **App passwords** (search for it if you can't find it)
6. Click on **App passwords**
7. Select **Mail** as the app and **Other** as the device
8. Name it something like "Portfolio Contact Form"
9. Click **Generate**
10. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

## Step 2: Configure Environment Variables

1. Open `backend/.env` file
2. Replace the placeholder values:

```env
# Replace with the Gmail account that will SEND the emails
EMAIL_USER=kavyabhanvadia@gmail.com

# Replace with the App Password you generated in Step 1 (remove spaces)
EMAIL_PASS=xxxxxxxxxxxxxxxx
```

**Important Notes:**
- The `EMAIL_USER` is the Gmail account that will send the emails
- Remove all spaces from the App Password when pasting it
- The emails will always be sent TO `kavyabhanvadia@gmail.com` (hardcoded in server.js)
- The sender's email will be set as the `replyTo` field, so you can reply directly to the person who filled the form

## Step 3: Start the Backend Server

```bash
cd backend
npm run dev
```

The server should start on `http://localhost:3000`

## Step 4: Start the Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend should start on `http://localhost:5173` (or similar)

## Step 5: Test the Contact Form

1. Go to your frontend URL in the browser
2. Navigate to the Contact section
3. Fill in the form with test data
4. Click "await sendMessage()"
5. You should see a success message
6. Check `kavyabhanvadia@gmail.com` inbox for the email

## Troubleshooting

### "Invalid credentials" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify the EMAIL_USER is correct
- Ensure there are no spaces in the EMAIL_PASS

### "Network error" on frontend
- Make sure the backend server is running on port 3000
- Check that CORS is enabled in the backend (it's already configured)
- Verify the API URL in Contact.tsx matches your backend URL

### Email not received
- Check spam/junk folder
- Verify the recipient email in `backend/server.js` line 44
- Check backend console for any errors

## How It Works

1. **Frontend**: User fills the contact form in `Contact.tsx`
2. **API Call**: Form data is sent to `http://localhost:3000/api/contact` via POST request
3. **Backend**: Express server receives the data and validates it
4. **Nodemailer**: Creates an email with the form data
5. **Gmail SMTP**: Sends the email through Gmail's servers
6. **Delivery**: Email arrives at kavyabhanvadia@gmail.com

## Email Format

The received email will include:
- Subject: "Portfolio Contact: [subject from form]"
- From: Your configured EMAIL_USER
- Reply-To: The sender's email address from the form
- Body: Formatted HTML with name, email, subject, and message

## Production Deployment

When deploying to production:

1. Update the API URL in `frontend/src/components/Contact.tsx`:
   - Change `http://localhost:3000/api/contact` to your production API URL
   - Example: `https://your-domain.com/api/contact`

2. Set environment variables on your hosting platform:
   - Add `EMAIL_USER` and `EMAIL_PASS` in your hosting dashboard
   - Never commit `.env` file to version control

3. Update CORS settings in `backend/server.js` if needed to only allow your frontend domain

## Security Best Practices

✅ **DO:**
- Use App Passwords instead of regular passwords
- Keep `.env` file in `.gitignore`
- Set environment variables through your hosting platform
- Enable rate limiting on the API endpoint (recommended for production)

❌ **DON'T:**
- Commit `.env` file to Git
- Share your App Password
- Use your regular Gmail password
- Expose your API keys in frontend code

## Alternative Email Services

If you prefer not to use Gmail, you can modify `backend/server.js` to use other services:

- **SendGrid**: Professional email service with free tier
- **Mailgun**: Good for transactional emails
- **AWS SES**: Amazon's email service
- **Outlook/Office365**: Alternative to Gmail

Just update the nodemailer configuration accordingly.

## Need Help?

If you encounter any issues:
1. Check the backend console for error messages
2. Check the browser console for frontend errors
3. Verify all environment variables are set correctly
4. Make sure both frontend and backend servers are running
