import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    const data = await resend.emails.send({
      from: "Email From Portfolio <onboarding@resend.dev>",
      to: "panpetertran123@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `<p><strong>Email:</strong> ${email}</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return NextResponse.json({ status: "OK", data });
  } catch (error) {
    console.error("Email failed:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
