import { z } from "zod";

export const eventTypeValues = [
  "corporate",
  "college",
  "private",
  "other",
] as const;

export const budgetValues = [
  "under-50k",
  "50k-1.5L",
  "1.5L-3L",
  "3L+",
  "unsure",
] as const;

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(120, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  eventType: z.enum(eventTypeValues, {
    errorMap: () => ({ message: "Please choose an event type" }),
  }),
  budget: z.enum(budgetValues, {
    errorMap: () => ({ message: "Please choose a budget range" }),
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please add more detail (at least 20 characters)")
    .max(5000, "Message is too long"),
});

export type BookingPayload = z.infer<typeof bookingSchema>;

export function fieldErrorsFromZod(
  result: z.SafeParseError<BookingPayload>
): Partial<Record<keyof BookingPayload, string>> {
  const out: Partial<Record<keyof BookingPayload, string>> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof BookingPayload | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
