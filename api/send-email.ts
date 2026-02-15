/**
 * Example serverless function for Resend email integration
 * with professional HTML templates matching EverLeaf Medical Center branding
 *
 * Deploy this to:
 * - Vercel: /api/send-email.ts
 * - Netlify: /netlify/functions/send-email.ts
 *
 * Install Resend SDK: npm install resend
 *
 * Environment variable needed: RESEND_API_KEY
 */

import { Resend } from "resend";
import emailTemplates from "../utils/emailTemplates";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  formType: "appointment" | "contact" | "newsletter";
  [key: string]: any;
}

/**
 * Get email content using professional HTML templates
 */
function getEmailContent(data: FormData) {
  const adminEmail = "info@everleaf.com"; // Your receiving email

  switch (data.formType) {
    case "appointment":
      // Email to admin (notification)
      const appointmentAdminHTML = `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Department:</strong> ${data.department || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "No message provided"}</p>
      `;

      // Auto-reply to user (confirmation) - uses professional template
      const appointmentUserHTML =
        emailTemplates.getAppointmentConfirmationTemplate({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          department: data.department,
          message: data.message,
        });

      return {
        admin: {
          subject: `New Appointment Request - ${data.fullName}`,
          html: appointmentAdminHTML,
        },
        user: {
          subject: "Appointment Request Received – EverLeaf Medical Center",
          html: appointmentUserHTML,
        },
      };

    case "contact":
      // Email to admin (notification)
      const contactAdminHTML = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;

      // Auto-reply to user (confirmation) - uses professional template
      const contactUserHTML = emailTemplates.getContactConfirmationTemplate({
        fullName: data.fullName,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      return {
        admin: {
          subject: `Contact Form: ${data.subject}`,
          html: contactAdminHTML,
        },
        user: {
          subject: "Message Received – EverLeaf Medical Center",
          html: contactUserHTML,
        },
      };

    case "newsletter":
      // Email to admin (notification)
      const newsletterAdminHTML = `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
      `;

      // Welcome email to user - uses professional template
      const newsletterUserHTML = emailTemplates.getNewsletterWelcomeTemplate({
        email: data.email,
      });

      return {
        admin: {
          subject: "New Newsletter Subscription",
          html: newsletterAdminHTML,
        },
        user: {
          subject: "Welcome to EverLeaf Medical Center Newsletter",
          html: newsletterUserHTML,
        },
      };

    default:
      return {
        admin: {
          subject: "New Form Submission",
          html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
        },
      };
  }
}

/**
 * Vercel/Netlify serverless function handler
 */
export default async function handler(req: any, res: any) {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return res.status(200).json({ message: "OK" });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const formData: FormData = req.body;

    // Validate required fields
    if (!formData.formType) {
      return res.status(400).json({ error: "Form type is required" });
    }

    // Get email content (admin notification + user confirmation)
    const emailContent = getEmailContent(formData);
    const adminEmail = "info@everleaf.com";

    // Send email to admin (notification)
    const adminEmailResult = await resend.emails.send({
      from: "EverLeaf Medical Center <noreply@everleaf.com>", // Update with your verified domain
      to: [adminEmail],
      subject: emailContent.admin.subject,
      html: emailContent.admin.html,
      reply_to: formData.email, // Allow replying directly to the sender
    });

    if (adminEmailResult.error) {
      console.error("Resend Error (Admin Email):", adminEmailResult.error);
      return res
        .status(500)
        .json({ error: "Failed to send notification email" });
    }

    // Send auto-reply to user (if applicable)
    if (emailContent.user) {
      const userEmailResult = await resend.emails.send({
        from: "EverLeaf Medical Center <noreply@everleaf.com>", // Update with your verified domain
        to: [formData.email],
        subject: emailContent.user.subject,
        html: emailContent.user.html,
      });

      if (userEmailResult.error) {
        console.error("Resend Error (User Email):", userEmailResult.error);
        // Don't fail the entire request if user email fails - admin already got the notification
      }
    }

    return res.status(200).json({
      success: true,
      message: "Emails sent successfully",
      id: adminEmailResult.data?.id,
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
