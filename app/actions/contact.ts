"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.enum(["private-event", "group", "press", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactActionResult =
  | { success: true }
  | { success: false; errors: z.ZodFormattedError<ContactFormData> };

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.format(),
    };
  }

  // Validation passed — email sending wired in M5 (Resend/SendGrid)
  // For now: simulate a short delay and return success
  await new Promise((resolve) => setTimeout(resolve, 300));

  return { success: true };
}
