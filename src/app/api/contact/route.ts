import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().optional().default(""),
  exploration: z.string().optional().default("General Exploration"),
  message: z.string().optional().default("No specific message provided"),
});

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { success: false, error: "Server email configuration is missing" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", issues: parseResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, company, exploration, message } = parseResult.data;
    const toEmail = process.env.CONTACT_TO_EMAIL || "huzaifasys@gmail.com";

    const resend = new Resend(apiKey);

    const emailSubject = `Inquiry: ${name} (${company || "Direct Portfolio"})`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
            .header { background: #0A66C2; color: #ffffff; padding: 28px 32px; }
            .badge { display: inline-block; font-size: 11px; font-family: monospace; background: rgba(255, 255, 255, 0.2); padding: 4px 10px; border-radius: 6px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; font-weight: bold; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
            .body { padding: 32px; }
            .field-row { margin-bottom: 20px; }
            .label { font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 4px; font-weight: 700; }
            .value { font-size: 15px; font-weight: 600; color: #0f172a; }
            .message-box { background: #f1f5f9; border-left: 4px solid #0A66C2; padding: 16px 20px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1e293b; margin-top: 8px; white-space: pre-wrap; }
            .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
            .cta-button { display: inline-block; background: #0A66C2; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 13px; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="badge">[PORTFOLIO INQUIRY]</div>
              <h1>New Project Message</h1>
            </div>
            <div class="body">
              <div class="field-row">
                <div class="label">Sender Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field-row">
                <div class="label">Work Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-row">
                <div class="label">Company / Organization</div>
                <div class="value">${company || "Not specified"}</div>
              </div>
              <div class="field-row">
                <div class="label">Area of Exploration</div>
                <div class="value" style="color: #2563EB;">${exploration || "General Inquiry"}</div>
              </div>
              <div class="field-row">
                <div class="label">Project Details / Message</div>
                <div class="message-box">${message || "No specific details entered."}</div>
              </div>
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(emailSubject)}" class="cta-button" style="color: #ffffff;">Reply Directly to ${name}</a>
              </div>
            </div>
            <div class="footer">
              Sent via Huzaifa Sys Portfolio • System Architecture & AI Engineering
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Huzaifa Sys Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
      text: `New Portfolio Inquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nExploration: ${exploration || "N/A"}\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to process inquiry";
    console.error("Contact API internal error:", err);
    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: 500 }
    );
  }
}
