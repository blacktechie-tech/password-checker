// script.js
const password = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const feedback = document.getElementById('feedback');

password.addEventListener('input', () => {
  const val = password.value;
  let strength = 0;

  // Scoring
  if (val.length >= 8) strength++;
  if (val.length >= 12) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  // Update bar
  strengthBar.style.width = (strength / 5) * 100 + "%";
  const colors = ["#ccc", "#ff4d4d", "#ffa500", "#ffff66", "#4CAF50", "#2e8b57"];
  strengthBar.style.backgroundColor = colors[strength];

  // Feedback messages
  let messages = [];
  if (val.length < 8) messages.push("At least 8 characters");
  if (!/[A-Z]/.test(val)) messages.push("Add uppercase letters");
  if (!/[0-9]/.test(val)) messages.push("Add numbers");
  if (!/[^A-Za-z0-9]/.test(val)) messages.push("Add special characters");

  feedback.textContent = messages.length === 0 
    ? "Strong password ✅" 
    : "Tips: " + messages.join(", ");
});
