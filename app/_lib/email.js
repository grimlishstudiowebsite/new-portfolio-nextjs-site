import "server-only";

import nodemailer from "nodemailer";

function escapeHtml(value) {
	const entities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
	};

	return String(value).replace(/[&<>"']/g, (character) => entities[character]);
}

export async function sendEnquiryNotification({ name, email, phone, message }) {
	const port = Number(process.env.SMTP_PORT);

	if (
		!process.env.SMTP_HOST ||
		!Number.isInteger(port) ||
		!process.env.SMTP_USER ||
		!process.env.SMTP_PASS ||
		!process.env.SMTP_FROM ||
		!process.env.CONTACT_TO
	) {
		throw new Error("SMTP configuration is incomplete");
	}

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port,
		secure: port === 465,
		requireTLS: port !== 465,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	const formattedMessage = escapeHtml(message).replace(/\r\n|\r|\n/g, "<br>");

	const html = `<!doctype html>
		<html lang="en">
		  <body style="margin:0;padding:24px;background-color:#f9f0f0;font-family:Arial,Helvetica,sans-serif;color:#2f2929;">
		    <div style="max-width:600px;margin:0 auto;padding:28px;background-color:#ffffff;border:1px solid #eacdcd;">
		      <p style="margin:0 0 8px;color:#950303;font-size:12px;font-weight:bold;letter-spacing:2px;">
		        GRIMLISH STUDIO
		      </p>

		      <h1 style="margin:0 0 24px;font-size:24px;line-height:1.3;">
		        New enquiry
		      </h1>

		      <p style="margin:0 0 12px;line-height:1.5;">
		        <strong>Name:</strong> ${escapeHtml(name)}
		      </p>
		      <p style="margin:0 0 12px;line-height:1.5;">
		        <strong>Email:</strong> ${escapeHtml(email)}
		      </p>
		      <p style="margin:0 0 24px;line-height:1.5;">
		        <strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}
		      </p>

		      <h2 style="margin:0 0 12px;font-size:18px;">
		        Message
		      </h2>
		      <div style="padding:16px;background-color:#f9f0f0;line-height:1.6;">
		        ${formattedMessage}
		      </div>

		      <p style="margin:24px 0 0;color:#595454;font-size:13px;line-height:1.5;">
		        Reply to this email to respond to the visitor.
		      </p>
		    </div>
  </body>
</html>`;

	await transporter.sendMail({
		from: process.env.SMTP_FROM,
		to: process.env.CONTACT_TO,
		replyTo: email,
		subject: "New Grimlish Studio enquiry",
		text: [
			`Name: ${name}`,
			`Email: ${email}`,
			`Phone: ${phone || "Not provided"}`,
			"",
			"Message:",
			message,
		].join("\n"),
		html,
	});
}