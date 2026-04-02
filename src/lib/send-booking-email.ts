import type { BookingPayload } from "./booking-schema";

function formatEmailBody(data: BookingPayload): string {
  const eventLabels: Record<BookingPayload["eventType"], string> = {
    corporate: "Corporate",
    college: "College / fest",
    private: "Private party",
    other: "Other",
  };
  const budgetLabels: Record<BookingPayload["budget"], string> = {
    "under-50k": "Under ₹50,000",
    "50k-1.5L": "₹50,000 – ₹1,50,000",
    "1.5L-3L": "₹1,50,000 – ₹3,00,000",
    "3L+": "₹3,00,000+",
    unsure: "Not sure yet",
  };

  return [
    `New booking request from the website`,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Event type: ${eventLabels[data.eventType]}`,
    `Budget: ${budgetLabels[data.budget]}`,
    ``,
    `Message:`,
    data.message,
  ].join("\n");
}

export type SendBookingResult =
  | { ok: true }
  | { ok: false; code: "not_configured" | "provider_error"; message: string };

export async function sendBookingEmail(
  data: BookingPayload
): Promise<SendBookingResult> {
  const to =
    process.env.BOOKING_TO_EMAIL?.trim() || "jagrat2011@gmail.com";
  const subject = `Booking request — ${data.name}`;
  const text = formatEmailBody(data);

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (web3Key) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: web3Key,
        subject,
        name: data.name,
        email: data.email,
        message: text,
      }),
    });
    const json = (await res.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;
    if (!res.ok || !json?.success) {
      return {
        ok: false,
        code: "provider_error",
        message:
          json?.message ||
          "Could not send your request. Please try again or email directly.",
      };
    }
    return { ok: true };
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    const from =
      process.env.RESEND_FROM_EMAIL?.trim() ||
      "Booking <onboarding@resend.dev>";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
      }),
    });
    const json = (await res.json().catch(() => null)) as {
      message?: string;
    } | null;
    if (!res.ok) {
      return {
        ok: false,
        code: "provider_error",
        message:
          json?.message ||
          "Email could not be sent. Check Resend domain / from address.",
      };
    }
    return { ok: true };
  }

  return {
    ok: false,
    code: "not_configured",
    message:
      "Booking email is not configured yet. Add WEB3FORMS_ACCESS_KEY or RESEND_API_KEY to the server environment.",
  };
}
