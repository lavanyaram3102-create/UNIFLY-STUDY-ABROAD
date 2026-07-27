// Generic AJAX submit handler for contact form.
// Works with Formsubmit.co or Formspree if the form action points to their endpoint.
// If the endpoint does not support CORS or AJAX, the form will fall back to normal POST (browser submit).

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    status.textContent = 'Sending...';

    const url = form.action;
    const data = new FormData(form);

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Some endpoints (Formsubmit) return a redirect which fetch won't follow as JSON.
      if (res.ok) {
        form.reset();
        status.textContent = 'Thanks — your message has been sent. We will contact you shortly.';
      } else {
        // Attempt to parse JSON error if available
        let errText = '';
        try { const err = await res.json(); errText = err.error || JSON.stringify(err); } catch (_) { errText = await res.text(); }
        status.textContent = 'Submission failed: ' + (errText || res.statusText);
      }
    } catch (err) {
      // If CORS prevents AJAX, fall back to normal submit
      status.textContent = 'Network/CORS prevented AJAX submit; attempting normal form submit...';
      setTimeout(() => form.submit(), 800);
    }
  });
});
