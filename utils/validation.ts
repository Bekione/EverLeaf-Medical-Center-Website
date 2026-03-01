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
    .trim()
    .min(1, "validation.fullName.required")
    .min(2, "validation.fullName.min")
    .max(100, "validation.fullName.max")
    .regex(
      /^[a-zA-Z]+([a-zA-Z\s'-]*[a-zA-Z]+)?$/,
      "validation.fullName.invalid",
    ),

  email: z
    .string()
    .trim()
    .min(1, "validation.email.required")
    .email("validation.email.invalid")
    .toLowerCase(),

  subject: z.string().min(1, "validation.subject.required"),

  message: z
    .string()
    .trim()
    .min(1, "validation.message.required")
    .min(10, "validation.message.min")
    .max(1000, "validation.message.max")
    .regex(/^.*[a-zA-Z0-9]+.*$/, "validation.message.invalid"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ============================================================================
// Appointment Form Schema
// ============================================================================

export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "validation.fullName.required")
    .min(2, "validation.fullName.min")
    .max(100, "validation.fullName.max")
    .regex(
      /^[a-zA-Z]+([a-zA-Z\s'-]*[a-zA-Z]+)?$/,
      "validation.fullName.invalid",
    ),

  email: z
    .string()
    .trim()
    .min(1, "validation.email.required")
    .email("validation.email.invalid")
    .toLowerCase(),

  phone: z
    .string()
    .min(1, "validation.phone.required")
    .regex(/^[0-9+\s()-]+$/, "validation.phone.invalid")
    .refine((val) => {
      const digitsOnly = val.replace(/\D/g, "");
      return digitsOnly.length >= 10 && digitsOnly.length <= 20;
    }, "validation.phone.digits")
    .transform((val) => val.replace(/\s/g, "")), // Remove spaces for storage

  department: z.string().min(1, "validation.department.required"),

  message: z
    .string()
    .trim()
    .min(1, "validation.message.required")
    .min(10, "validation.message.appointmentMin")
    .max(500, "validation.message.appointmentMax")
    .regex(/^.*[a-zA-Z0-9]+.*$/, "validation.message.invalid"),
});

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

// ============================================================================
// Newsletter Form Schema
// ============================================================================

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .min(1, "validation.email.required")
    .email("validation.email.invalid")
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
