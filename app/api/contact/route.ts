import { NextResponse } from "next/server";
import { google } from "googleapis";

const CLIENT_ID = process.env.GMAIL_CLIENT_ID!;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET!;
const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI!;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN!;
const SENDER_EMAIL = process.env.GMAIL_USER_EMAIL!;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendEmail({ to, subject, text, html }: { to: string; subject: string; text?: string; html?: string }) {
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

  const headers = [
    `From: ${SENDER_EMAIL}`,
    `To: ${to}`,
    `Subject: ${subject}`,
  ];

  if (html) {
    headers.push("Content-Type: text/html; charset=UTF-8");
  }

  const messageParts = [
    ...headers,
    "",
    html ?? text ?? "",
  ];

  const message = Buffer.from(messageParts.join("\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: message,
    },
  });
}

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    // 1️⃣ ส่งไปเจ้าของเว็บ (Plain text)
    await sendEmail({
      to: SENDER_EMAIL,
      subject: `[Contact Form] ${subject}`,
      text: `From: ${email}\n\n${message}`,
    });

    // 2️⃣ ส่งไปผู้ส่ง (HTML ขอบคุณ)
    const htmlTemplate = `
      <section class="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
        <header>
          <a href="#">
            <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/full-logo.svg" alt="">
          </a>
        </header>

        <main class="mt-8">
          <h2 class="text-gray-700 dark:text-gray-200">Hi ${email.split("@")[0]},</h2>

          <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
            Thank you for contacting us! We’ve received your message and will get back to you shortly.
          </p>

          <button
            class="px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Get started
          </button>

          <p class="mt-8 text-gray-600 dark:text-gray-300">
            Thanks, <br>
            Traveler Thailand team
          </p>
        </main>

        <footer class="mt-8">
          <p class="text-gray-500 dark:text-gray-400">
            This email was sent to <a href="mailto:${email}" class="text-blue-600 hover:underline dark:text-blue-400" target="_blank">${email}</a>.
          </p>
          <p class="mt-3 text-gray-500 dark:text-gray-400">© 2025 Traveler Thailand. All Rights Reserved.</p>
        </footer>
      </section>
    `;

    await sendEmail({
      to: email,
      subject: "Thanks for contacting Traveler Thailand",
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: String(error) });
  }
}
