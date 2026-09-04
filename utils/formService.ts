/**
 * Form submission service supporting multiple email providers.
 * Supports: EmailJS (client-side), Formspree (client-side), Resend (backend), and custom APIs.
 *
 * Configuration via environment variables:
 * - VITE_FORM_SERVICE: 'emailjs' | 'formspree' | 'resend' | 'custom' | 'simulation'
 * - VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 * - VITE_FORMSPREE_FORM_ID
 * - VITE_RESEND_ENDPOINT
 * - VITE_CUSTOM_API_ENDPOINT
 */

// Type definitions for form data
export type FormType = "appointment" | "contact" | "newsletter";

export interface FormData {
  [key: string]: any;
}

export interface FormResponse {
  success: boolean;
  message?: string;
}

// Get environment variables (Vite uses import.meta.env)
const FORM_SERVICE = import.meta.env.VITE_FORM_SERVICE || "simulation";
const DEV_MODE = import.meta.env.DEV;

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Formspree configuration
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

// Resend configuration (backend endpoint)
const RESEND_ENDPOINT = import.meta.env.VITE_RESEND_ENDPOINT;

// Custom API configuration
const CUSTOM_API_ENDPOINT = import.meta.env.VITE_CUSTOM_API_ENDPOINT;

/**
 * EmailJS Integration
 * Free tier: 200 emails/month
 * Docs: https://www.emailjs.com/docs/
 */
async function submitViaEmailJS(
  data: FormData,
  formType: FormType,
): Promise<FormResponse> {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error(
      "EmailJS credentials not configured. Please check your .env file.",
    );
  }

  try {
    // Dynamically import EmailJS at runtime (bypassing Vite's static analysis)
    // We use string concatenation to prevent Vite from trying to resolve this at build time
    let emailjs;
    try {
      const packageName = "@emailjs" + "/browser"; // Split to avoid static analysis
      emailjs = await import(/* @vite-ignore */ packageName);
    } catch (importError) {
      throw new Error(
        "EmailJS package not installed. Run: npm install @emailjs/browser\n" +
          "Or switch to a different service in your .env file (formspree, resend, or simulation).",
      );
    }

    // Map form data to EmailJS template variables
    const templateParams = {
      form_type: formType,
      ...data,
      to_email: "info@everleaf.com", // Your receiving email
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    );

    if (response.status === 200) {
      return { success: true, message: "Email sent successfully via EmailJS" };
    } else {
      throw new Error(`EmailJS returned status ${response.status}`);
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "Failed to send email via EmailJS. Please try again later.",
    );
  }
}

/**
 * Formspree Integration
 * Free tier: 50 submissions/month
 * Docs: https://formspree.io/docs/
 */
async function submitViaFormspree(
  data: FormData,
  formType: FormType,
): Promise<FormResponse> {
  if (!FORMSPREE_FORM_ID) {
    throw new Error(
      "Formspree Form ID not configured. Please check your .env file.",
    );
  }

  try {
    const response = await fetch(
      `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType,
          ...data,
        }),
      },
    );

    if (response.ok) {
      return {
        success: true,
        message: "Form submitted successfully via Formspree",
      };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "Formspree submission failed");
    }
  } catch (error) {
    console.error("Formspree Error:", error);
    throw new Error(
      "Failed to submit form via Formspree. Please try again later.",
    );
  }
}

/**
 * Resend Integration (via backend endpoint)
 * Requires a serverless function or API route
 * Docs: https://resend.com/docs/
 */
async function submitViaResend(
  data: FormData,
  formType: FormType,
): Promise<FormResponse> {
  if (!RESEND_ENDPOINT) {
    throw new Error(
      "Resend endpoint not configured. Please check your .env file.",
    );
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType,
        ...data,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        message: result.message || "Email sent successfully via Resend",
      };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "Resend submission failed");
    }
  } catch (error) {
    console.error("Resend Error:", error);
    throw new Error("Failed to send email via Resend. Please try again later.");
  }
}

/**
 * Custom API Integration
 * For your own backend implementation
 */
async function submitViaCustomAPI(
  data: FormData,
  formType: FormType,
): Promise<FormResponse> {
  if (!CUSTOM_API_ENDPOINT) {
    throw new Error(
      "Custom API endpoint not configured. Please check your .env file.",
    );
  }

  try {
    const response = await fetch(CUSTOM_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType,
        ...data,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        message: result.message || "Form submitted successfully",
      };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "API submission failed");
    }
  } catch (error) {
    console.error("Custom API Error:", error);
    throw new Error(
      "Failed to submit form via custom API. Please try again later.",
    );
  }
}

/**
 * Simulation mode for development
 */
async function simulateSubmission(
  data: FormData,
  formType: FormType,
): Promise<FormResponse> {
  // Log in development mode only
  if (DEV_MODE) {
    console.group(`📧 [Form Simulation: ${formType}]`);
    console.log("Payload:", data);
    console.log("Service:", FORM_SERVICE);
    console.groupEnd();
  }

  // Simulate network latency (1-2 seconds)
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000),
  );

  // Simulate occasional errors (1% chance) for robust testing
  const randomError = Math.random() < 0.01;

  if (randomError) {
    throw new Error("Simulated server error. Please try again.");
  }

  return {
    success: true,
    message: "Form simulated successfully (development mode)",
  };
}

/**
 * Main form submission function
 * Automatically routes to the configured service
 */
export const submitForm = async (
  data: FormData,
  formType: FormType,
): Promise<FormResponse> => {
  try {
    if (FORM_SERVICE === "simulation" && !DEV_MODE) {
      throw new Error(
        "Form submission is not configured for production. Please set VITE_FORM_SERVICE.",
      );
    }

    switch (FORM_SERVICE) {
      case "emailjs":
        return await submitViaEmailJS(data, formType);

      case "formspree":
        return await submitViaFormspree(data, formType);

      case "resend":
        return await submitViaResend(data, formType);

      case "custom":
        return await submitViaCustomAPI(data, formType);

      case "simulation":
      default:
        return await simulateSubmission(data, formType);
    }
  } catch (error) {
    // Re-throw with user-friendly message
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};
