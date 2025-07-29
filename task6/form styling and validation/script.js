document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (!name || !email || !message) {
    errorMsg.textContent = '❌ Please fill in all fields.';
    errorMsg.style.color = 'red';
  } else if (!email.includes('@') || !email.includes('.')) {
    errorMsg.textContent = '❌ Please enter a valid email address.';
    errorMsg.style.color = 'red';
  } else {
    errorMsg.textContent = '✅ Form submitted successfully!';
    errorMsg.style.color = 'green';
    // You can reset the form or handle submission here
    document.getElementById('contactForm').reset();
  }
});
