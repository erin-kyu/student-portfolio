// js/main.js

// --- FEATURE 6: Initialize Bootstrap Tooltips ---
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
  tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
);

// --- FEATURE 3: Keyboard support for modal cards ---
document.querySelectorAll('.project-card[data-bs-toggle="modal"]').forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
  });
});

// --- Dark Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-bs-theme') || 'light';
    html.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
    themeToggle.textContent = current === 'dark' ? 'Dark Mode' : 'Light Mode';
  });
}

// --- Active nav link on scroll ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.3 });
sections.forEach(section => navObserver.observe(section));

// --- Scroll fade-in ---
const sectionElements = document.querySelectorAll('.portfolio-section, .stats-section, .clock-section');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sectionElements.forEach(section => {
  section.classList.add('section-hidden');
  fadeObserver.observe(section);
});

const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  .section-hidden { opacity: 0; transition: opacity 0.6s cubic-bezier(0.25, 0.1, 0.25, 1); }
  .section-visible { opacity: 1; }
`;
document.head.appendChild(fadeStyle);

// --- Close mobile navbar on link click ---
const navbarCollapse = document.getElementById('navbarMain');
if (navbarCollapse) {
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
  document.querySelectorAll('#navbarMain .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) bsCollapse.hide();
    });
  });
}


// ================================================================
// CLOCK (from original homepage)
// ================================================================
function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;

  const clockTime = document.getElementById('clock-time');
  const clockAmpm = document.getElementById('clock-ampm');
  const clockDate = document.getElementById('clock-date');

  if (clockTime) clockTime.textContent = `${String(h).padStart(2, '0')}:${m}:${s}`;
  if (clockAmpm) clockAmpm.textContent = ampm;

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if (clockDate) clockDate.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}
updateClock();
setInterval(updateClock, 1000);


// ================================================================
// GREETING DIALOG (from original homepage)
// ================================================================
const greetings = [
  { range: [5, 11],  title: "Good Morning!",  sub: "Hope your day is off to a great start.", emoji: "☀️" },
  { range: [12, 16], title: "Good Afternoon!", sub: "Hope you're having a productive day.", emoji: "🌤️" },
  { range: [17, 20], title: "Good Evening!",   sub: "The day is winding down — take it easy.", emoji: "🌇" },
  { range: [21, 23], title: "Good Night!",     sub: "Don't stay up too late — rest up!", emoji: "🌙" },
  { range: [0, 4],   title: "Still Awake?",    sub: "It's late! Get some rest when you can.", emoji: "🦉" }
];

function getGreeting() {
  const hour = new Date().getHours();
  return greetings.find(g => hour >= g.range[0] && hour <= g.range[1]);
}

window.addEventListener('load', function () {
  const g = getGreeting();
  const emojiEl = document.getElementById('greeting-emoji');
  const titleEl = document.getElementById('greeting-title');
  const subEl = document.getElementById('greeting-sub');
  const clockGreeting = document.getElementById('clock-greeting');

  if (emojiEl) emojiEl.textContent = g.emoji;
  if (titleEl) titleEl.textContent = g.title;
  if (subEl) subEl.textContent = g.sub;
  if (clockGreeting) clockGreeting.textContent = g.title;
});

function closeGreeting() {
  const overlay = document.getElementById('greeting-overlay');
  if (overlay) overlay.style.display = 'none';
}
// Make closeGreeting globally accessible
window.closeGreeting = closeGreeting;


// ================================================================
// CONTACT FORM VALIDATION (from original contact.js)
// ================================================================
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn = document.getElementById('submitBtn');
  const statusMsg = document.getElementById('statusMsg');

  const fields = {
    name:    { el: document.getElementById('contactName'),    err: document.getElementById('nameErr') },
    email:   { el: document.getElementById('contactEmail'),   err: document.getElementById('emailErr') },
    subject: { el: document.getElementById('contactSubject'), err: document.getElementById('subjectErr') },
    message: { el: document.getElementById('contactMessage'), err: document.getElementById('messageErr') },
  };

  function validateName(val)    { return val.trim().length >= 2; }
  function validateEmail(val)   { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()); }
  function validateSubject(val) { return val.trim().length >= 3; }
  function validateMessage(val) { return val.trim().length >= 10; }

  const validators = { name: validateName, email: validateEmail, subject: validateSubject, message: validateMessage };

  // Real-time validation
  Object.entries(fields).forEach(([key, { el, err }]) => {
    if (!el) return;
    el.addEventListener('input', () => {
      const valid = validators[key](el.value);
      if (el.value.length > 0) {
        el.classList.toggle('is-invalid', !valid);
      }
    });
    el.addEventListener('blur', () => {
      el.classList.toggle('is-invalid', !validators[key](el.value));
    });
  });

  // Rate limiting
  let submitTimes = [];
  function isRateLimited() {
    const now = Date.now();
    submitTimes = submitTimes.filter(time => now - time < 60000);
    if (submitTimes.length >= 3) return true;
    submitTimes.push(now);
    return false;
  }

  const formLoadTime = Date.now();
  function isTooFast() { return (Date.now() - formLoadTime) / 1000 < 2; }

  // Spam filter
  const spamWords = ["free money", "buy now", "click here", "subscribe", "promo", "winner", "congratulations", "act now", "limited offer", "earn money"];
  function containsSpam(text) { return spamWords.some(word => text.toLowerCase().includes(word)); }

  function showStatus(msg, type) {
    if (statusMsg) { statusMsg.textContent = msg; statusMsg.className = `status-msg text-center mt-3 ${type}`; }
  }
  function clearStatus() {
    if (statusMsg) { statusMsg.className = 'status-msg text-center mt-3'; statusMsg.textContent = ''; }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearStatus();

    // Clear previous validation
    Object.values(fields).forEach(({ el }) => { if (el) el.classList.remove('is-invalid'); });

    const vals = {};
    for (const key of Object.keys(fields)) { vals[key] = fields[key].el ? fields[key].el.value : ''; }

    if (!validateName(vals.name))       { fields.name.el.classList.add('is-invalid'); fields.name.el.focus(); showStatus('Please enter your name.', 'error'); return; }
    if (!validateEmail(vals.email))     { fields.email.el.classList.add('is-invalid'); fields.email.el.focus(); showStatus('Please enter a valid email address.', 'error'); return; }
    if (!validateSubject(vals.subject)) { fields.subject.el.classList.add('is-invalid'); fields.subject.el.focus(); showStatus('Please add a subject (at least 3 characters).', 'error'); return; }
    if (!validateMessage(vals.message)) { fields.message.el.classList.add('is-invalid'); fields.message.el.focus(); showStatus('Your message is too short (at least 10 characters).', 'error'); return; }

    if (isTooFast()) { showStatus('Submission was too fast. Please review your message and try again.', 'warn'); return; }
    if (isRateLimited()) { showStatus('Too many submissions. Please wait a minute before trying again.', 'warn'); return; }
    if (containsSpam(vals.message) || containsSpam(vals.subject)) { showStatus('Your message contains blocked keywords. Please revise.', 'warn'); return; }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(res => {
      if (res.ok) {
        showStatus('✓ Message sent! I\'ll get back to you soon.', 'success');
        form.reset();
        Object.values(fields).forEach(({ el }) => { if (el) el.classList.remove('is-invalid'); });
      } else {
        showStatus('Something went wrong. Please try again.', 'error');
      }
    })
    .catch(() => { showStatus('Network error. Check your connection and try again.', 'error'); })
    .finally(() => { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; });
  });
})();
