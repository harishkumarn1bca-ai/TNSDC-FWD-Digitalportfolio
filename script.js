// script.js - small UI interactions

// set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// theme toggle (stores preference)
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') document.body.classList.add('dark');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// simple animated skill bars on scroll/visible
function animateSkillBars() {
  document.querySelectorAll('.bar-fill').forEach(el => {
    const width = el.style.width || '0%';
    // trigger reflow and set width (already in inline style)
    el.style.width = '0';
    setTimeout(()=> el.style.width = width, 100);
  });
}
window.addEventListener('load', animateSkillBars);

// Contact form handler (example only; doesn't send email)
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  // small validation
  if (!name || !email || !message) {
    status.textContent = 'Please complete all fields.';
    return false;
  }
  // fake send: show success message
  status.textContent = 'Thanks, ' + name + '! Your message was received (demo).';
  // reset
  e.target.reset();
  return false;
}

function resetForm(){
  document.getElementById('contactForm').reset();
  document.getElementById('formStatus').textContent = '';
}