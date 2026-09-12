/**
 * ============================================================================
 * CONCEPTA DIGITAL MARKETING AGENCY - LEAD INTAKE BACKEND
 * ============================================================================
 * Google Apps Script Web App for handling website inquiry submissions.
 * 
 * Target Inbox: growwithconcepta@gmail.com
 * Features:
 *  - Validates required fields (Name, Business Name, Work Email)
 *  - Rejects bot submissions via hidden honeypot field
 *  - Sends formatted plain-text and HTML notification emails via GmailApp
 *  - Sets Reply-To directly to the lead's email address
 *  - Returns standard JSON responses with CORS-compatible outputs
 */

// 1. RECIPIENT CONFIGURATION
var CONCEPTA_GMAIL_ADDRESS = "growwithconcepta@gmail.com";

/**
 * Health-check endpoint for browser or script testing
 */
function doGet(e) {
  var response = {
    status: "active",
    service: "Concepta Lead Intake Web App",
    recipient: CONCEPTA_GMAIL_ADDRESS,
    timestamp: new Date().toISOString()
  };

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handles incoming POST submissions from the Concepta website
 */
function doPost(e) {
  try {
    // 1. Verify that request data exists
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse(false, "No request body provided");
    }

    // 2. Parse request payload (supports JSON and form-urlencoded)
    var payload;
    try {
      payload = JSON.parse(e.postData.contents);
    } catch (parseError) {
      payload = e.parameter || {};
    }

    // 3. Security: Honeypot Anti-Spam Check
    // If the hidden 'website_hp' field contains any value, it was filled by a bot
    if (payload.website_hp && String(payload.website_hp).trim().length > 0) {
      return createJsonResponse(false, "Spam submission rejected");
    }

    // 4. Sanitize and extract incoming fields
    var name = sanitize(payload.name);
    var businessName = sanitize(payload.businessName);
    var email = sanitize(payload.email);
    var phoneOrWhatsapp = sanitize(payload.phoneOrWhatsapp) || "Not provided";
    var message = sanitize(payload.message) || "No additional message provided";

    // Format services needed (handles array or string)
    var servicesList = [];
    if (Array.isArray(payload.servicesNeeded)) {
      servicesList = payload.servicesNeeded.map(function(s) { return sanitize(s); });
    } else if (typeof payload.servicesNeeded === "string" && payload.servicesNeeded.trim().length > 0) {
      servicesList = [sanitize(payload.servicesNeeded)];
    }
    var servicesNeededFormatted = servicesList.length > 0 ? servicesList.join(", ") : "None specified";

    // 5. Validation
    if (!name || name.length < 2) {
      return createJsonResponse(false, "Please provide your full name");
    }

    if (!businessName || businessName.length < 1) {
      return createJsonResponse(false, "Please provide your business name");
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return createJsonResponse(false, "Please provide a valid work email address");
    }

    // Guard against excessively large message payload (max 8000 chars)
    if (message.length > 8000) {
      return createJsonResponse(false, "Message exceeds allowed length limit");
    }

    // 6. Format Submission Timestamp
    var now = new Date();
    var formattedDate = Utilities.formatDate(
      now,
      Session.getScriptTimeZone() || "GMT",
      "EEEE, MMMM d, yyyy 'at' hh:mm a (z)"
    );

    // 7. Compose Email Subject
    // Format: "New Lead — [Business Name]"
    var subject = "New Lead — " + businessName;

    // 8. Compose Plain-Text Email Body (Exact Structure Requested)
    var plainBody =
"--------------------------------\n" +
"NEW CONCEPTA INQUIRY\n" +
"--------------------------------\n\n" +
"Name:\n" +
name + "\n\n" +
"Business:\n" +
businessName + "\n\n" +
"Work Email:\n" +
email + "\n\n" +
"Phone / WhatsApp:\n" +
phoneOrWhatsapp + "\n\n" +
"Services Needed:\n" +
servicesNeededFormatted + "\n\n" +
"Message:\n" +
message + "\n\n" +
"--------------------------------\n" +
"LEAD DETAILS\n" +
"--------------------------------\n\n" +
"Submitted:\n" +
formattedDate + "\n\n" +
"Source:\n" +
"Concepta Website\n\n" +
"--------------------------------";

    // 9. Compose Styled HTML Email Body for Superior Gmail Readability
    var htmlBody =
'<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; color: #18181b;">' +
'  <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 28px 24px; color: #ffffff;">' +
'    <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #ddd6fe; margin-bottom: 6px;">Concepta Lead Notification</div>' +
'    <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff;">New Lead — ' + escapeHtml(businessName) + '</h1>' +
'  </div>' +
'  <div style="padding: 24px;">' +
'    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">' +
'      <tr><td style="padding: 8px 0; color: #71717a; width: 140px; font-weight: 600;">Name:</td><td style="padding: 8px 0; color: #18181b; font-weight: 600;">' + escapeHtml(name) + '</td></tr>' +
'      <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">Business:</td><td style="padding: 8px 0; color: #18181b; font-weight: 600;">' + escapeHtml(businessName) + '</td></tr>' +
'      <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">Work Email:</td><td style="padding: 8px 0;"><a href="mailto:' + escapeHtml(email) + '" style="color: #7c3aed; font-weight: 600; text-decoration: none;">' + escapeHtml(email) + '</a></td></tr>' +
'      <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">Phone / WhatsApp:</td><td style="padding: 8px 0; color: #18181b;">' + escapeHtml(phoneOrWhatsapp) + '</td></tr>' +
'      <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">Services Needed:</td><td style="padding: 8px 0;"><span style="display: inline-block; background-color: #f5f3ff; color: #6d28d9; border: 1px solid #ddd6fe; padding: 4px 10px; border-radius: 8px; font-size: 13px; font-weight: 600;">' + escapeHtml(servicesNeededFormatted) + '</span></td></tr>' +
'    </table>' +
'    <div style="margin-top: 20px; padding: 16px; background-color: #fafafa; border: 1px solid #f4f4f5; border-radius: 12px;">' +
'      <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 8px;">Message</div>' +
'      <div style="font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap;">' + escapeHtml(message) + '</div>' +
'    </div>' +
'    <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #f4f4f5; display: flex; justify-content: space-between; font-size: 12px; color: #a1a1aa; font-family: monospace;">' +
'      <div>Submitted: ' + formattedDate + '</div>' +
'      <div>Source: Concepta Website</div>' +
'    </div>' +
'  </div>' +
'</div>';

    // 10. Send Email via GmailApp
    // Direct reply will go directly to the prospective client's email
    GmailApp.sendEmail(CONCEPTA_GMAIL_ADDRESS, subject, plainBody, {
      name: "Concepta Lead System",
      htmlBody: htmlBody,
      replyTo: email
    });

    // 11. Return Success Response
    return createJsonResponse(true, "Inquiry sent successfully");

  } catch (error) {
    return createJsonResponse(false, "Unable to send inquiry: " + (error.message || String(error)));
  }
}

/**
 * Creates a JSON response with proper CORS configuration
 */
function createJsonResponse(success, message) {
  var output = {
    success: success,
    message: message
  };

  return ContentService.createTextOutput(JSON.stringify(output))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Helper to sanitize input strings
 */
function sanitize(input) {
  if (input === null || input === undefined) return "";
  return String(input).trim();
}

/**
 * Escapes characters for HTML injection protection
 */
function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
