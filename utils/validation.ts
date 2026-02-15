import { z } from "zod";

/**
 * Validation Schemas using Zod
 *
 * Provides comprehensive validation for all forms in the application
 */

// ============================================================================
// Contact Form Schema
// ============================================================================

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(
      /^[a-zA-Z]+([a-zA-Z\s'-]*[a-zA-Z]+)?$/,
      "Full name must start and end with letters, and only contain letters, spaces, hyphens, and apostrophes",
    ),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),

  subject: z.string().min(1, "Please select a subject"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .regex(
      /^.*[a-zA-Z0-9]+.*$/,
      "Message must contain at least some letters or numbers",
    )
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ============================================================================
// Appointment Form Schema
// ============================================================================

export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(
      /^[a-zA-Z]+([a-zA-Z\s'-]*[a-zA-Z]+)?$/,
      "Full name must start and end with letters, and only contain letters, spaces, hyphens, and apostrophes",
    ),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^[0-9+\s()-]+$/,
      "Phone number contains invalid characters. Only digits, spaces, and + - ( ) are allowed.",
    )
    .refine((val) => {
      const digitsOnly = val.replace(/\D/g, "");
      return digitsOnly.length >= 10 && digitsOnly.length <= 20;
    }, "Phone number must contain between 10 and 20 digits")
    .transform((val) => val.replace(/\s/g, "")), // Remove spaces for storage

  department: z.string().min(1, "Please select a department"),

  message: z
    .string()
    .min(
      10,
      "Please provide details about your appointment (minimum 10 characters)",
    )
    .max(500, "Message must be less than 500 characters")
    .regex(
      /^.*[a-zA-Z0-9]+.*$/,
      "Message must contain at least some letters or numbers",
    )
    .trim(),
});

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

// ============================================================================
// Newsletter Form Schema
// ============================================================================

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),
});

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;

// ============================================================================
// Validation Helper Functions
// ============================================================================

/**
 * Validates form data and returns formatted errors
 *
 * @param schema - Zod schema to validate against
 * @param data - Form data to validate
 * @returns Object with success status and errors
 */
export function validateForm<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): { success: boolean; errors?: Record<string, string>; data?: T } {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
      if (issue.path[0]) {
        errors[issue.path[0].toString()] = issue.message;
      }
    });
    return { success: false, errors };
  }

  return { success: true, data: result.data };
}

/**
 * Validates a single field
 *
 * @param schema - Zod schema
 * @param fieldName - Name of field to validate
 * @param value - Field value
 * @returns Error message or null
 */
export function validateField<T>(
  schema: z.ZodSchema<T>,
  fieldName: string,
  value: unknown,
): string | null {
  try {
    // Create partial object for single field validation
    const result = schema.safeParse({ [fieldName]: value });
    if (!result.success) {
      const fieldError = result.error.issues.find(
        (issue) => issue.path[0] === fieldName,
      );
      return fieldError?.message || null;
    }
    return null;
  } catch {
    return null;
  }
}
