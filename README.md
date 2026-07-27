UNIFLY Study Abroad — Website scaffold

Files updated with Formspree contact form integration:
- index.html (form now includes a Formspree-ready action and data-formspree attribute)
- js/script.js (AJAX submit to Formspree if you provide your Formspree form ID)

How to set up Formspree (quick):
1. Go to https://formspree.io and sign up (free plan available).
2. Create a new form. Formspree will give you a Form ID that looks like `xyzabcd`.
3. In this repository, open `index.html` and replace both occurrences of `YOUR_FORM_ID` with your Formspree form ID (or edit the form's `action` to https://formspree.io/f/your_id and keep the `data-formspree` attribute in sync).
   - Example: action="https://formspree.io/f/mgebdkpq" and data-formspree="mgebdkpq"
4. Deploy the site (GitHub Pages / Netlify / Vercel). When visitors submit the contact form, messages will be delivered to the email you registered with Formspree.

Notes & options:
- The JS file attempts an AJAX submit to Formspree when the form's `data-formspree` attribute is set. If you don't provide the form ID, the form will still POST to the `action` URL if you update it.
- You may customize the `_subject` hidden field to change the subject line in the email sent by Formspree.
- For spam protection, consider enabling reCAPTCHA through Formspree dashboard or use Formspree's built-in protections.

If you'd like, I can:
- Replace the placeholder with your actual Formspree form ID (if you provide it) and push the change now.
- Add a dedicated thank-you page and redirect after successful submit.
- Add server-side validation or store submissions in a spreadsheet (Google Sheets integration via Zapier/Integromat).
