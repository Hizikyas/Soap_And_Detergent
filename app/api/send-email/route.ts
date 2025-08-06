import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

// Configure transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider (e.g., 'gmail', 'sendgrid')
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (message.length > 1000) {
      return NextResponse.json({ error: 'Message too long' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Sanitize inputs (basic sanitization)
    const sanitizedFullName = fullName.replace(/[<>&]/g, '');
    const sanitizedMessage = message.replace(/[<>&]/g, '');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'propeasepropertymanagement@gmail.com',
      replyTo: email, // User's email for replies
      subject: `New Contact Form Submission from ${sanitizedFullName}`,
      text: `
        Name: ${sanitizedFullName}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${sanitizedMessage}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedFullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${sanitizedMessage}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}