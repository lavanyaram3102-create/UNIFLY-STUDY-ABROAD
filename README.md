UNIFLY Study Abroad — Website scaffold (Formsubmit)

Files updated to send inquiries to enquiry@uniflystudyabroad.com using Formsubmit.co:
- index.html (contact form action set to https://formsubmit.co/enquiry@uniflystudyabroad.com)
- js/script.js (generic AJAX submit handler with fallback to normal POST)

How Formsubmit works (quick):
- No signup required for basic use. The first time a form is submitted to an email, Formsubmit sends a verification email to that address. Follow the verification link in that email to start receiving messages.
- If you prefer not to receive a verification email or want more features (spam protection, redirect pages), consider Formspree or a serverless function.

Next steps I can take for you:
- Add a thank-you page and redirect after successful submit (_next field).
- Add a simple honeypot field and/or enable reCAPTCHA for spam protection.
- Integrate submissions with Google Sheets / Zapier.

Tell me which of these you'd like and I'll implement it and push the change.
