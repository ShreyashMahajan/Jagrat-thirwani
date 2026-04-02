import { NextResponse } from "next/server";
import {
  bookingSchema,
  fieldErrorsFromZod,
  type BookingPayload,
} from "@/lib/booking-schema";
import { sendBookingEmail } from "@/lib/send-booking-email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = fieldErrorsFromZod(parsed);
    return NextResponse.json(
      { ok: false, fieldErrors },
      { status: 422 }
    );
  }

  const data: BookingPayload = parsed.data;
  const sent = await sendBookingEmail(data);

  if (!sent.ok) {
    if (sent.code === "not_configured") {
      console.error(
        "[booking] Email not configured: set WEB3FORMS_ACCESS_KEY or RESEND_API_KEY"
      );
      return NextResponse.json(
        {
          ok: false,
          error:
            "ONLINE_BOOKING_UNAVAILABLE",
        },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: false, error: sent.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
