// Formspree integration: submit the contact form via fetch (AJAX) when a Formspree form ID is provided.
// If no ID is set, the form will still work as a normal POST submission when action is updated with the correct endpoint.

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', async function(e){
    // Attempt AJAX submit to Formspree if form data-formspree is set
    const formId = form.dataset.formspree;
    if (!formId || formId === 'YOUR_FORM_ID'){
      // Let the browser perform a normal POST (fallback) but prevent duplicate JS submission
      if (form.action && !form.action.includes('YOUR_FORM_ID')) {
        return; // allow default submit
      }
      e.preventDefault();
      alert('Please set your Formspree form ID in the form element (data-formspree) or in the form action URL before using AJAX submission. The form will still work via normal POST if you update the action to your Formspree endpoint.');
      return;
    }

    e.preventDefault();
    status.textContent = 'Sending...';

    const url = 'https://formspree.io/f/' + formId;
    const data = new FormData(form);

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (res.ok) {
        form.reset();
        status.textContent = 'Thanks — your message has been sent. We will contact you shortly.';
      } else {
        const err = await res.json();
        status.textContent = 'Submission failed: ' + (err.error || JSON.stringify(err));
      }
    } catch (err) {
      status.textContent = 'Network error: ' + err.message;
    }
  });
});
