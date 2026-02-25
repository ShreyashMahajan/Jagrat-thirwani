import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const inquiryLabel =
      inquiryType === "standup"
        ? "Stand-up booking"
        : inquiryType === "brand"
          ? "Brand collaboration"
          : "Other";

    await sendMail({
      to: process.env.CONTACT_EMAIL || "hello@example.com",
      subject: `[Jagrat] ${inquiryLabel} – ${name}`,
      text: `From: ${name} <${email}>\nType: ${inquiryLabel}\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Inquiry type:</strong> ${inquiryLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
