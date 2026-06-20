import { NextRequest, NextResponse } from "next/server";

const BREVO_API = "https://api.brevo.com/v3/smtp/email";
const FROM_EMAIL = "admin@intelligentai.services";
const TO_EMAIL = "smarthomeprogrammer@gmail.com";
const TO_NAME = "AI Intelligent Services";

const budgetLabels: Record<string, string> = {
  "under-50k": "Under $50,000",
  "50k-150k": "$50,000 – $150,000",
  "150k-500k": "$150,000 – $500,000",
  "500k-plus": "$500,000+",
  "prefer-not-to-say": "Prefer not to say",
};

const projectTypeLabels: Record<string, string> = {
  residential: "Residential / Smart Home",
  corporate: "Corporate / Commercial AV",
  both: "Mixed-Use / Both",
  other: "Other",
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  let body: {
    name?: string;
    email?: string;
    phone?: string;
    projectType?: string;
    budget?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, projectType, budget, message } = body;

  if (!name || !email || !projectType || !budget || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #0C0C0C; color: #F5F0E8; margin: 0; padding: 0; }
    .wrapper { max-width: 640px; margin: 0 auto; background: #141414; }
    .header { background: #141414; border-bottom: 1px solid #3C3C3C; padding: 32px 40px; }
    .header h1 { font-size: 22px; font-weight: 300; color: #F5F0E8; margin: 0 0 4px; }
    .header p { font-size: 11px; color: #C9A96E; letter-spacing: 0.2em; text-transform: uppercase; margin: 0; }
    .gold-bar { height: 2px; background: linear-gradient(90deg, #C9A96E 0%, #8B6B3D 100%); }
    .body { padding: 40px; }
    .field { margin-bottom: 28px; border-bottom: 1px solid #2A2A2A; padding-bottom: 20px; }
    .field:last-child { border-bottom: none; margin-bottom: 0; }
    .label { font-size: 10px; color: #C9A96E; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 6px; }
    .value { font-size: 15px; color: #F5F0E8; font-weight: 300; line-height: 1.6; }
    .message-box { background: #1C1C1C; border: 1px solid #2A2A2A; padding: 20px; margin-top: 8px; }
    .footer { background: #0C0C0C; padding: 24px 40px; border-top: 1px solid #2A2A2A; text-align: center; }
    .footer p { font-size: 11px; color: #7A7670; margin: 4px 0; }
    .footer a { color: #C9A96E; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Project Inquiry</h1>
      <p>intelligentai.systems</p>
    </div>
    <div class="gold-bar"></div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color:#C9A96E;text-decoration:none;">${email}</a></div>
      </div>
      ${
        phone
          ? `<div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${phone}" style="color:#C9A96E;text-decoration:none;">${phone}</a></div>
      </div>`
          : ""
      }
      <div class="field">
        <div class="label">Project Type</div>
        <div class="value">${projectTypeLabels[projectType] ?? projectType}</div>
      </div>
      <div class="field">
        <div class="label">Budget</div>
        <div class="value">${budgetLabels[budget] ?? budget}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box value">${message.replace(/\n/g, "<br/>")}</div>
      </div>
    </div>
    <div class="footer">
      <p>Submitted via <a href="https://intelligentai.systems">intelligentai.systems</a></p>
      <p>Reply directly to this email to respond to ${name}</p>
    </div>
  </div>
</body>
</html>`;

  const textContent = `New Project Inquiry — intelligentai.systems

Name: ${name}
Email: ${email}${phone ? `\nPhone: ${phone}` : ""}
Project Type: ${projectTypeLabels[projectType] ?? projectType}
Budget: ${budgetLabels[budget] ?? budget}

Message:
${message}

---
Reply to this email to contact ${name} at ${email}`;

  const payload = {
    sender: { name: TO_NAME, email: FROM_EMAIL },
    to: [{ email: TO_EMAIL, name: TO_NAME }],
    replyTo: { email, name },
    subject: `New ${projectTypeLabels[projectType] ?? projectType} Inquiry — ${name}`,
    htmlContent,
    textContent,
  };

  try {
    const res = await fetch(BREVO_API, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Brevo error:", err);
      return NextResponse.json(
        { error: "Failed to send email. Please try again or call us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Brevo fetch error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
