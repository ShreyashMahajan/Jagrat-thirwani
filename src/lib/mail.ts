/**
 * Mail sender — wire to Resend, Nodemailer, or any provider.
 * For Resend: npm i resend, then use resend.emails.send().
 * Set CONTACT_EMAIL and your API key in .env.local.
 */

export type SendMailOptions = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

export async function sendMail(options: SendMailOptions): Promise<void> {
  const { to, subject, text, html } = options;

  // Resend example (uncomment when RESEND_API_KEY is set):
  // const Resend = require("resend").Resend;
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // const { error } = await resend.emails.send({
  //   from: "Jagrat Portfolio <onboarding@resend.dev>",
  //   to: [to],
  //   subject,
  //   html: html || text,
  // });
  // if (error) throw new Error(error.message);

  // Placeholder: log and succeed so form works without provider
  if (process.env.NODE_ENV === "development") {
    console.log("[mail] Would send:", { to, subject, text: text.slice(0, 80) });
  }
}
