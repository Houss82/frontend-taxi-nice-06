import { formatEmailByType } from "@/lib/email-format";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.EMAIL_TO || "contact@taxi-nice-06.com";
  const from =
    process.env.EMAIL_FROM || "Taxi Nice 06 <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY manquante");
    return NextResponse.json(
      { error: "Configuration email manquante sur le serveur" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Données invalides" },
        { status: 400 }
      );
    }

    // Honeypot anti-spam (champ caché dans les formulaires)
    if (data._gotcha) {
      return NextResponse.json({ success: true });
    }

    const { subject, html, replyTo } = formatEmailByType(type, data);

    const payload = {
      from,
      to: [to],
      subject,
      html,
    };

    if (replyTo) {
      payload.reply_to = replyTo;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: error.message || "Erreur lors de l'envoi de l'email" },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, id: result.id });
  } catch (error) {
    console.error("Erreur API email:", error);
    return NextResponse.json(
      { error: error.message || "Erreur serveur" },
      { status: 500 }
    );
  }
}
