/**
 * Professional Email Templates for EverLeaf Medical Center
 * Matching the brand identity with primary blue (#136dec) and secondary green (#10b981)
 */

interface EmailTemplateData {
  formType: "appointment" | "contact" | "newsletter" | "blog-notification";
  [key: string]: any;
}

/**
 * Base Email Template with EverLeaf branding
 */
const getEmailBase = (content: string, preheader: string) => `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>EverLeaf Medical Center</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #f6f7f8; }
    table { border-collapse: collapse; }
    img { border: 0; display: block; }
    .preheader { display: none; max-height: 0; overflow: hidden; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f7f8;">
  <!-- Preheader Text -->
  <div class="preheader" style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
    ${preheader}
  </div>
  
  <!-- Email Container -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f6f7f8;">
    <tr>
      <td style="padding: 40px 20px;">
        <!-- Content Table -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          
          <!-- Header with Logo and Branding -->
          <tr>
            <td style="background: linear-gradient(135deg, #136dec 0%, #0e5bc4 100%); padding: 40px 40px 30px; text-align: center;">
              <!-- Logo -->
              <div style="margin-bottom: 20px;">
                <svg width="60" height="60" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ffffff" d="m600.24 212.89c-4.66-26.54-8.32-53.07-11.73-79.61l-1.24-9.96-0.61-4.97-0.15-1.25c-0.05-0.4-0.09-0.87-0.16-1.14l-0.41-1.87c-1.05-4.93-2.93-9.5-5.49-13.49-2.59-3.98-5.77-7.44-9.45-10.1-3.66-2.65-7.66-4.61-11.77-5.72-4.1-1.1-8.25-1.48-12.29-1.09l-18.57 1.7-19.91 1.74q-9.95 0.86-19.91 1.64c-26.54 2.14-53.09 3.99-79.64 5.64-13.27 0.85-26.55 1.58-39.82 2.31l-4.98 0.28-2.49 0.13-0.62 0.03-0.31 0.02-0.11 0.03-0.47 0.1q-0.46 0.1-0.92 0.17c-0.3 0.04-0.61 0.05-0.9 0.18-0.57 0.22-1.16 0.32-1.72 0.51-2.26 0.73-4.23 2.02-6 3.47-1.75 1.48-3.23 3.27-4.3 5.19-1.06 1.94-1.77 3.96-2.09 5.99-0.21 1.01-0.2 2.06-0.23 3.09q0.06 0.4 0.07 0.79l0.01 0.39-0.01 0.2v0.1l0.01 0.26 0.19 4.98 0.64 19.92c0.86 26.55 1.47 53.1 1.97 79.66 0.15 6.63 0.21 13.27 0.31 19.91l0.01 0.31-0.01 0.54-0.03 1.07-0.07 2.16-0.19 4.31c-0.05 1.43-0.24 2.87-0.44 4.3q-0.28 2.15-0.61 4.3c-0.36 2.87-1.15 5.67-1.83 8.49-0.38 1.4-0.67 2.83-1.16 4.19q-0.7 2.07-1.43 4.12c-7.94 21.87-24.06 40.34-44.53 51.3-2.59 1.31-5.19 2.61-7.86 3.76q-4.06 1.58-8.18 3.01-4.19 1.2-8.43 2.22c-2.83 0.61-5.71 1.01-8.58 1.44-1.43 0.23-2.87 0.33-4.31 0.41l-4.32 0.24c-3.42 0.16-4.37 0.09-6.18 0.11l-9.96 0.02-39.83-0.2c-13.28-0.16-26.56-0.24-39.84-0.46l-36.93-0.65q-2.95-0.03-5.74 0.98c-1.87 0.67-3.71 1.68-5.33 3.05-1.63 1.36-3.02 3.04-4.09 4.91-1.06 1.88-1.77 3.95-2.1 6.26l-0.09 0.43-0.05 0.21c-0.01 0.05-0.02 0.06-0.03 0.13l-0.01 0.31-0.08 2.49-0.2 4.98-0.41 9.96-0.83 19.92c-0.63 13.28-1.22 26.56-1.95 39.85-0.67 13.28-1.48 26.56-2.25 39.84-0.86 13.28-1.69 26.56-2.65 39.85q-0.68 9.96-1.46 19.92l-1.26 16.88c-0.09 3.81 0.52 7.7 1.89 11.48 1.37 3.78 3.52 7.4 6.3 10.63 2.77 3.25 6.23 6.01 10.15 8.16l1.48 0.83c0.51 0.23 1.04 0.42 1.56 0.65l1.57 0.67c0.52 0.27 1.09 0.35 1.64 0.54l1.66 0.51c0.28 0.08 0.55 0.19 0.84 0.25l0.86 0.16 1.73 0.35 0.88 0.19c0.16 0.03 0.26 0.07 0.48 0.09l0.62 0.07q19.93 2.06 39.86 4.4c26.57 3.17 53.14 6.61 79.72 11.05-26.54 4.69-53.08 8.37-79.62 11.79q-19.9 2.53-39.81 4.77l-0.62 0.07c-0.19 0.03-0.51 0.04-0.76 0.05l-1.61 0.08-3.24 0.12-1.63 0.04c-0.54 0-1.08-0.05-1.62-0.08l-3.27-0.21c-1.08-0.11-2.19-0.11-3.27-0.32l-3.25-0.54c-1.08-0.19-2.18-0.37-3.26-0.59l-3.21-0.87c-8.56-2.33-16.75-6.36-24.06-11.76-7.3-5.4-13.66-12.25-18.66-20.12-5.03-7.87-8.5-16.86-10.32-26.2l-0.36-1.76c-0.12-0.58-0.17-1.17-0.25-1.76l-0.42-3.55-0.2-1.78-0.15-1.61-0.21-2.49-0.85-9.95q-0.87-9.96-1.64-19.91c-1.09-13.28-2.04-26.55-3.02-39.82-0.9-13.28-1.84-26.55-2.63-39.83-0.85-13.27-1.57-26.54-2.32-39.82l-1.01-19.91-0.5-9.96-0.25-4.98-0.11-2.48-0.01-0.32v-0.49l0.01-1.03 0.02-2.05c0.09-10.95 2.2-22.08 6.28-32.45 4.06-10.39 10.17-19.94 17.71-28.17 7.56-8.22 16.64-15.11 26.76-20.14 10.11-5.03 21.23-8.2 32.49-9.28l4.22-0.31c1.35-0.08 3.08-0.18 3.65-0.18l4.98-0.16 9.96-0.27 19.91-0.52c13.28-0.34 26.56-0.55 39.83-0.84l39.83-0.56 9.96-0.08c1.51-0.01 3.88 0 3.77-0.1q0.33-0.04 0.66-0.04c0.22 0.01 0.44 0.03 0.64-0.06 0.4-0.13 0.83-0.11 1.24-0.21q0.58-0.23 1.2-0.31 0.54-0.31 1.15-0.45c0.37-0.2 0.71-0.43 1.12-0.56 1.47-0.77 2.85-1.85 3.99-3.13 1.15-1.29 2.01-2.77 2.64-4.3q0.11-0.29 0.26-0.57c0.13-0.17 0.09-0.41 0.16-0.6 0.07-0.41 0.35-0.78 0.32-1.22q0.04-0.31 0.12-0.63c0.05-0.2 0.14-0.41 0. 1-0.64q0-0.33 0.04-0.66l0.04-0.33 0.03-0.17 0.02-0.09v-0.31c0.04-6.64 0.04-13.28 0.13-19.92 0.25-26.56 0.61-53.12 1.23-79.67l0.46-19.92 0.14-4.98 0.09-1.93 0.12-2.1 0.3-4.18c0.61-5.56 1.6-11.11 3.22-16.49 3.13-10.77 8.25-20.92 14.99-29.71 6.72-8.82 15-16.34 24.33-22.16 9.34-5.81 19.76-9.9 30.52-11.89 2.68-0.49 5.39-0.8 8.09-1.13 1.35-0.19 2.7-0.23 4.05-0.28l4.05-0.11 2.02-0.03h0.51l0.32 0.01 0.62 0.03 2.49 0.1 4.98 0.23c13.28 0.61 26.56 1.23 39.84 1.95 26.57 1.4 53.13 3.01 79.7 4.9q9.96 0.68 19.92 1.46l19.92 1.55 9.97 0.81 4.98 0.41 2.84 0.26 3.47 0.37c9.2 1.14 18.17 3.92 26.18 8.23 8.01 4.31 15.13 9.99 20.88 16.71 5.77 6.69 10.19 14.39 13.03 22.52 2.86 8.13 4.13 16.68 3.82 24.99l-0.13 3.1c-0.01 0.56-0.07 0.92-0.11 1.35l-0.14 1.24-0.56 4.99-1.15 9.96c-3.16 26.57-6.58 53.14-10.99 79.72z"/>
                  <path fill="#9adec9" d="m268.88 509.29q-1.44-4.01-2.71-8.08c-0.85-2.72-1.58-5.47-2.35-8.23q-0.55-2.07-1.04-4.16-0.51-2.09-0.95-4.2l-0.88-4.23-0.78-4.26c-1.99-11.41-2.85-23.15-2.56-35.14 0.27-5.97 0.66-12.03 1.65-18.09 0.4-3.04 1.03-6.06 1.65-9.1 0.28-1.53 0.72-3.03 1.09-4.55 0.4-1.51 0.75-3.04 1.2-4.54 3.54-12.07 8.85-23.99 16.01-35.03l2.82-4.04c0.95-1.35 1.88-2.72 2.94-3.99 2.06-2.56 4.07-5.23 6.35-7.63l3.37-3.67c1.15-1.2 2.36-2.32 3.55-3.48 1.2-1.14 2.39-2.32 3.62-3.43l3.79-3.22c10.18-8.5 21.44-15.54 33.11-21.19 1.46-0.7 2.92-1.46 4.39-2.12l4.44-1.9 4.46-1.88c1.48-0.6 2.93-1.09 4.41-1.64 2.94-1.05 5.88-2.2 8.86-3.15l4.46-1.47c1.48-0.51 3.03-0.89 4.55-1.34l4.59-1.29 4.56-1.14c3.05-0.79 6.06-1.43 9.08-2.1 6.04-1.3 12-2.32 17.91-3.3 23.56-3.74 45.9-5.52 66.08-8.51 2.49-0.4 5-0.78 7.42-1.2l7.01-1.39c1.17-0.23 2.34-0.39 3.5-0.69l3.47-0.83c2.32-0.58 4.64-1.04 6.94-1.69 4.58-1.35 9.18-2.54 13.71-4.11l3.41-1.11 1.7-0.55 1.68-0.64 6.74-2.51c35.83-13.98 69.53-35.74 101.28-61.68l0.49-0.40c17.33-14.16 42.86-11.6 57.03 5.74 5.08 6.22 8 13.47 8.86 20.9l0.31 2.63 0.25 2.29 0.43 4.43q0.4 4.38 0.73 8.69c0.44 5.75 0.74 11.46 0.95 17.17 0.44 11.42 0.59 22.81 0.3 34.23-0.26 11.41-0.84 22.85-1.9 34.3q-0.75 8.59-1.82 17.2c-0.72 5.73-1.59 11.48-2.52 17.22-3.8 22.96-9.57 45.99-18.26 68.66-4.48 11.29-9.51 22.53-15.78 33.39-6.14 10.89-13.43 21.44-21.84 31.27-4.19 4.92-8.78 9.59-13.56 14.07-2.47 2.17-4.86 4.39-7.47 6.44-1.29 1.02-2.53 2.09-3.86 3.07l-4 2.92-1.01 0.73-1.1 0.74-2.21 1.47c-1.46 0.97-2.99 2.03-4.28 2.67l-8.05 4.42c-2.71 1.53-5.34 2.71-7.99 4-2.66 1.25-5.28 2.56-7.95 3.75-21.39 9.43-43.53 16.26-65.95 20.53-22.43 4.18-45.15 5.7-67.49 4.54-22.32-1.23-44.29-5.1-64.9-12.27 21.74-1.72 42.7-5 62.88-10.1 20.17-5.05 39.55-11.76 57.96-19.99 18.37-8.32 35.78-18.1 51.84-29.16 2-1.38 3.94-2.85 5.9-4.27 1.95-1.43 3.98-2.84 5.7-4.29l5.39-4.27c1.01-0.73 1.55-1.37 2.21-2.01l0.97-0.96 0.49-0.47 0.53-0.56c2.88-2.93 5.59-6.04 8.18-9.26 2.52-3.31 4.93-6.72 7.19-10.29 8.95-14.36 15.6-31.04 20.38-48.87 4.82-17.86 7.85-36.79 9.73-56.12 0.44-4.84 0.86-9.69 1.14-14.59 0.31-4.88 0.59-9.78 0.76-14.71 0.18-4.92 0.27-9.86 0.33-14.8q0.11-7.43 0-14.87c-0.18-9.93-0.47-19.88-1.09-29.79q-0.47-7.43-1.06-14.77-0.3-3.67-0.66-7.26l-0.37-3.53-0.37-3.04 66.39 26.24c-18.49 15.16-38.16 29.37-59.46 41.69-5.24 3.18-10.77 5.98-16.2 8.91-2.75 1.42-5.56 2.75-8.33 4.13l-4.18 2.05-4.26 1.92-8.57 3.76-8.74 3.45c-1.46 0.57-2.89 1.18-4.38 1.69l-4.45 1.57c-2.98 1.03-5.91 2.12-8.94 3.03l-9.08 2.7-2.26 0.67-2.3 0.59-4.61 1.17c-3.08 0.74-6.11 1.61-9.24 2.18l-9.34 1.85c-3.11 0.6-6.27 1-9.41 1.5l-4.7 0.7c-1.57 0.26-3.16 0.37-4.74 0.55l-9.48 0.92c-3.09 0.23-6.11 0.4-9.14 0.57-24.05 1.16-46.16 0.32-66.82 0.76-2.55 0.08-5.14 0.12-7.66 0.23-2.49 0.14-5.06 0.21-7.5 0.39-2.47 0.15-4.96 0.28-7.36 0.53l-3.64 0.32-3.56 0.43c-2.37 0.25-4.78 0.63-7.19 1-2.43 0.33-4.8 0.84-7.21 1.25-1.19 0.22-2.43 0.41-3.59 0.66l-3.42 0.8-3.46 0.76c-1.14 0.27-2.23 0.62-3.36 0.92-17.99 4.89-34.3 13.04-47.82 25.61l-2.46 2.44c-0.81 0.83-1.69 1.61-2.43 2.51-1.53 1.75-3.16 3.46-4.59 5.35l-2.23 2.79-2.08 2.94-1.05 1.48q-0.5 0.76-0.98 1.53l-1.98 3.09c-5.09 8.39-9.26 17.73-12.66 27.63-6.69 19.88-9.98 41.83-11.5 64.42z"/>
                </svg>
              </div>
              <!-- Brand Name -->
              <h1 style="color: #ffffff; font-family: 'Montserrat', Arial, sans-serif; font-size: 26px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">
                EverLeaf Medical Center
              </h1>
              <p style="color: #e0f2fe; font-size: 14px; margin: 8px 0 0; font-weight: 500;">
                Care That Grows With You
              </p>
            </td>
          </tr>
          
          <!-- Main Content -->
          ${content}
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #101822; padding: 40px; text-align: center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="color: #ffffff; font-size: 16px; font-weight: 600; margin: 0 0 8px;">EverLeaf Medical Center</p>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0; line-height: 1.6;">
                      123 Health Avenue, Addis Abeba, AA 10012<br>
                      📞 +251 954 123-456 | ✉️ info@everleaf.com
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 0; border-top: 1px solid #374151;">
                    <p style="color: #6b7280; font-size: 12px; margin: 0; line-height: 1.5;">
                      This email was sent by EverLeaf Medical Center.<br>
                      © 2024 EverLeaf Medical Center. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

/**
 * 1. Newsletter Subscription Confirmation (sent to user)
 */
export const getNewsletterWelcomeTemplate = (data: { email: string }) => {
  const content = `
    <tr>
      <td style="padding: 40px;">
        <!-- Icon -->
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="display: inline-block; background-color: #e0f2fe; border-radius: 50%; padding: 20px;">
            <span style="font-size: 48px; color: #136dec;">✉️</span>
          </div>
        </div>
        
        <!-- Heading -->
        <h2 style="color: #101822; font-family: 'Montserrat', Arial, sans-serif; font-size: 28px; font-weight: 700; margin: 0 0 16px; text-align: center;">
          Welcome to Our Newsletter!
        </h2>
        
        <!-- Body Text -->
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px; text-align: center;">
          Thank you for subscribing to <strong>EverLeaf Medical Center</strong> updates. You'll now receive:
        </p>
        
        <!-- Benefits List -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 30px 0;">
          <tr>
            <td style="padding: 12px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width: 30px; vertical-align: top;">
                    <span style="color: #10b981; font-size: 20px;">✓</span>
                  </td>
                  <td style="color: #374151; font-size: 15px; line-height: 1.5;">
                    <strong>Health Tips & Articles</strong> – Evidence-based wellness advice
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width: 30px; vertical-align: top;">
                    <span style="color: #10b981; font-size: 20px;">✓</span>
                  </td>
                  <td style="color: #374151; font-size: 15px; line-height: 1.5;">
                    <strong>Latest News</strong> – Updates about our services and medical advancements
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width: 30px; vertical-align: top;">
                    <span style="color: #10b981; font-size: 20px;">✓</span>
                  </td>
                  <td style="color: #374151; font-size: 15px; line-height: 1.5;">
                    <strong>Exclusive Offers</strong> – Special health packages and screenings
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <!-- CTA Button -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://everleaf-medical-center.vercel.app/blog" style="display: inline-block; background-color: #136dec; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
            Read Our Latest Articles
          </a>
        </div>
        
        <!-- Footer Note -->
        <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin: 30px 0 0; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 24px;">
          You're receiving this email at <strong>${data.email}</strong> because you subscribed to our newsletter.<br>
          <a href="#" style="color: #136dec; text-decoration: none;">Manage Preferences</a> | 
          <a href="#" style="color: #6b7280; text-decoration: none;">Unsubscribe</a>
        </p>
      </td>
    </tr>
  `;

  return getEmailBase(
    content,
    "Welcome to EverLeaf Medical Center Newsletter – Stay healthy & informed!",
  );
};

/**
 * 2. Blog/News Notification (sent to newsletter subscribers)
 */
export const getBlogNotificationTemplate = (data: {
  title: string;
  excerpt: string;
  imageUrl: string;
  articleUrl: string;
  category: string;
}) => {
  const content = `
    <tr>
      <td style="padding: 0;">
        <!-- Hero Image -->
        <img src="${data.imageUrl}" alt="${data.title}" style="width: 100%; height: auto; display: block;" />
      </td>
    </tr>
    
    <tr>
      <td style="padding: 40px;">
        <!-- Category Badge -->
        <div style="text-align: center; margin-bottom: 16px;">
          <span style="display: inline-block; background-color: #e0f2fe; color: #136dec; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
            ${data.category}
          </span>
        </div>
        
        <!-- Article Title -->
        <h2 style="color: #101822; font-family: 'Montserrat', Arial, sans-serif; font-size: 26px; font-weight: 700; margin: 0 0 16px; text-align: center; line-height: 1.3;">
          ${data.title}
        </h2>
        
        <!-- Excerpt -->
        <p style="color: #4b5563; font-size: 16px; line-height: 1.7; margin: 0 0 30px; text-align: center;">
          ${data.excerpt}
        </p>
        
        <!-- CTA Button -->
        <div style="text-align: center;">
          <a href="${data.articleUrl}" style="display: inline-block; background-color: #136dec; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
            Read Full Article →
          </a>
        </div>
        
        <!-- Divider -->
        <div style="border-top: 1px solid #e5e7eb; margin: 32px 0;"></div>
        
        <!-- Footer Note -->
        <p style="color: #6b7280; font-size: 13px; line-height: 1.5; margin: 0; text-align: center;">
          Stay informed with the latest health news and wellness tips from our experts.
        </p>
      </td>
    </tr>
  `;

  return getEmailBase(content, `New Article: ${data.title}`);
};

/**
 * 3. Contact Form Confirmation (auto-reply to user)
 */
export const getContactConfirmationTemplate = (data: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const content = `
    <tr>
      <td style="padding: 40px;">
        <!-- Icon -->
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="display: inline-block; background-color: #d1fae5; border-radius: 50%; padding: 20px;">
            <span style="font-size: 48px; color: #10b981;">✓</span>
          </div>
        </div>
        
        <!-- Heading -->
        <h2 style="color: #101822; font-family: 'Montserrat', Arial, sans-serif; font-size: 28px; font-weight: 700; margin: 0 0 16px; text-align: center;">
          Message Received!
        </h2>
        
        <!-- Body Text -->
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 24px; text-align: center;">
          Thank you for contacting <strong>EverLeaf Medical Center</strong>. We've received your message and will get back to you within 24-48 hours.
        </p>
        
        <!-- Message Summary Box -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 8px; margin: 24px 0;">
          <tr>
            <td style="padding: 24px;">
              <p style="color: #101822; font-size: 14px; font-weight: 600; margin: 0 0 12px;">Your Message:</p>
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px;"><strong>Subject:</strong> ${data.subject}</p>
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 12px;"><strong>Message:</strong></p>
              <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0; font-style: italic; padding-left: 16px; border-left: 3px solid #136dec;">
                "${data.message}"
              </p>
            </td>
          </tr>
        </table>
        
        <!-- Alternative Contact Methods -->
        <div style="background-color: #eff6ff; border-radius: 8px; padding: 20px; margin: 24px 0;">
          <p style="color: #101822; font-size: 14px; font-weight: 600; margin: 0 0 12px; text-align: center;">Need Immediate Assistance?</p>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="text-align: center; padding: 8px;">
                <p style="color: #136dec; font-size: 14px; margin: 0;">
                  📞 <strong>Call:</strong> +251 954 123-456
                </p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 8px;">
                <p style="color: #136dec; font-size: 14px; margin: 0;">
                  🚨 <strong>Emergency:</strong> 911
                </p>
              </td>
            </tr>
          </table>
        </div>
        
        <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin: 24px 0 0; text-align: center;">
          Your health is our priority. We look forward to serving you!
        </p>
      </td>
    </tr>
  `;

  return getEmailBase(
    content,
    "We received your message – EverLeaf Medical Center",
  );
};

/**
 * 4. Appointment Confirmation (auto-reply to user)
 */
export const getAppointmentConfirmationTemplate = (data: {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}) => {
  const content = `
    <tr>
      <td style="padding: 40px;">
        <!-- Icon -->
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="display: inline-block; background-color: #d1fae5; border-radius: 50%; padding: 20px;">
            <span style="font-size: 48px; color: #10b981;">📅</span>
          </div>
        </div>
        
        <!-- Heading -->
        <h2 style="color: #101822; font-family: 'Montserrat', Arial, sans-serif; font-size: 28px; font-weight: 700; margin: 0 0 16px; text-align: center;">
          Appointment Request Received!
        </h2>
        
        <!-- Body Text -->
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 24px; text-align: center;">
          Dear <strong>${data.fullName}</strong>, thank you for choosing EverLeaf Medical Center. Our team will contact you soon to confirm your appointment.
        </p>
        
        <!-- Request Details Box -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #eff6ff; border-radius: 12px; margin: 24px 0; border-left: 4px solid #136dec;">
          <tr>
            <td style="padding: 28px;">
              <p style="color: #136dec; font-size: 16px; font-weight: 700; margin: 0 0 16px;">Request Details:</p>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="color: #6b7280; font-size: 14px; margin: 0;"><strong>Name:</strong> ${data.fullName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="color: #6b7280; font-size: 14px; margin: 0;"><strong>Email:</strong> ${data.email}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="color: #6b7280; font-size: 14px; margin: 0;"><strong>Phone:</strong> ${data.phone}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="color: #6b7280; font-size: 14px; margin: 0;"><strong>Department:</strong> ${data.department || "General Consultation"}</p>
                  </td>
                </tr>
                ${
                  data.message
                    ? `
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 6px;"><strong>Additional Notes:</strong></p>
                    <p style="color: #374151; font-size: 14px; line-height: 1.5; margin: 0; font-style: italic;">
                      "${data.message}"
                    </p>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>
            </td>
          </tr>
        </table>
        
        <!-- What Happens Next -->
        <div style="background-color: #f9fafb; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <p style="color: #101822; font-size: 16px; font-weight: 600; margin: 0 0 16px; text-align: center;">What Happens Next?</p>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 10px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="width: 40px; vertical-align: top;">
                      <div style="background-color: #136dec; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 14px; font-weight: 700; padding-top: 4px;">
                        1
                      </div>
                    </td>
                    <td style="color: #374151; font-size: 14px; line-height: 1.5;">
                      Our team will review your request within <strong>6-12 hours</strong>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="width: 40px; vertical-align: top;">
                      <div style="background-color: #136dec; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 14px; font-weight: 700; padding-top: 4px;">
                        2
                      </div>
                    </td>
                    <td style="color: #374151; font-size: 14px; line-height: 1.5;">
                      We'll call you at <strong>${data.phone}</strong> to schedule your appointment
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="width: 40px; vertical-align: top;">
                      <div style="background-color: #136dec; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 14px; font-weight: 700; padding-top: 4px;">
                        3
                      </div>
                    </td>
                    <td style="color: #374151; font-size: 14px; line-height: 1.5;">
                      You'll receive a <strong>confirmation email</strong> with appointment details
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        
        <!-- Emergency Note -->
        <div style="background-color: #fef2f2; border-radius: 8px; border-left: 4px solid #ef4444; padding: 16px; margin: 24px 0;">
          <p style="color: #991b1b; font-size: 13px; font-weight: 600; margin: 0 0 4px;">⚠️ Emergency?</p>
          <p style="color: #7f1d1d; font-size: 13px; line-height: 1.4; margin: 0;">
            If you're experiencing a medical emergency, please call <strong>911</strong> or visit our Emergency Department immediately.
          </p>
        </div>
      </td>
    </tr>
  `;

  return getEmailBase(
    content,
    "Appointment Request Confirmed – EverLeaf Medical Center",
  );
};

export default {
  getNewsletterWelcomeTemplate,
  getBlogNotificationTemplate,
  getContactConfirmationTemplate,
  getAppointmentConfirmationTemplate,
};
