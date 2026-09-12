# Concepta Google Apps Script Backend Setup Guide

This Google Apps Script code powers the backend email system for Concepta's inquiry form. It receives form submissions from the website, parses and sanitizes the content, filters out bots via a honeypot check, and sends the notification directly to `growwithconcepta@gmail.com` with `Reply-To` configured to the prospective client's email.

---

## Step-by-Step Setup Instructions

### STEP 1: Create a new Google Apps Script project
1. Log in to your Google Account (or the `growwithconcepta@gmail.com` account).
2. Go to [script.google.com](https://script.google.com/) and click **"New project"**.
3. Rename the project at the top from *"Untitled project"* to **"Concepta Lead Backend"**.

### STEP 2: Paste the generated Apps Script code
1. Delete any default code inside the script editor (`function myFunction() { ... }`).
2. Copy the entire contents of `google-apps-script/Code.gs` and paste it into the editor (`Code.gs`).
3. Click the **Save** icon (or press `Ctrl+S` / `Cmd+S`).

### STEP 3: Verify the Concepta Gmail recipient address
Check line 16 of `Code.gs` to confirm:
```javascript
var CONCEPTA_GMAIL_ADDRESS = "growwithconcepta@gmail.com";
```
If you wish to route leads to another inbox, simply update this address.

### STEP 4: Deploy the script as a Web App
1. Click the blue **"Deploy"** button at the top right of the Apps Script editor.
2. Select **"New deployment"**.
3. Click the gear icon next to "Select type" and choose **"Web app"**.
4. Configure the settings:
   - **Description**: `Concepta Lead Intake v1`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial: This allows the website contact form to submit leads without requiring visitors to log into Google)*
5. Click **"Deploy"**.

### STEP 5: Authorize Gmail permissions (First-time prompt)
1. Google will display an **"Authorization required"** modal. Click **"Authorize access"**.
2. Select your Google account.
3. If Google displays *"Google hasn't verified this app"*, click **"Advanced"** (at the bottom left) and then click **"Go to Concepta Lead Backend (unsafe)"**.
4. Click **"Allow"** to grant permission to send emails on your behalf.

### STEP 6: Copy the Web App URL
1. After authorization, copy the generated **Web app URL**.
   It looks like this:
   `https://script.google.com/macros/s/AKfycbx.../exec`

### STEP 7: Paste the URL in the Website Frontend
Open `src/config/appConfig.ts` in the codebase and update line 11:
```typescript
export const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx.../exec";
```
*(You can also set it as an environment variable in `.env`: `VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec`)*.

### STEP 8: Test the Form
1. Open the Concepta website.
2. Fill out the inquiry form:
   - Name: `Alex Morgan`
   - Business Name: `Ember & Spice`
   - Work Email: `alex@example.com`
   - Services: select `Marketing`, `Paid Ads`, `Design`
   - Message: `Testing form submission`
3. Click **"Send Inquiry →"**.
4. You will see the button transition to `"Sending inquiry..."` and then the confirmation message:
   *"Thank you! Your inquiry has been sent successfully. Our team will get back to you shortly."*
5. Open your Gmail inbox (`growwithconcepta@gmail.com`) to verify the new email with the subject `"New Lead — Ember & Spice"`.
6. Click **Reply** in Gmail and confirm that the reply address defaults directly to `alex@example.com`.
