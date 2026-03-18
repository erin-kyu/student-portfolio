if (document.getElementById("toggleBtn")) {

const toggleBtn = document.getElementById("toggleBtn");
const formPanel = document.getElementById("formPanel");

toggleBtn.addEventListener("click", () => {
  const isOpen = formPanel.classList.toggle("is-open");
  toggleBtn.classList.toggle("is-open", isOpen);
  toggleBtn.setAttribute("aria-expanded", isOpen);
  formPanel.setAttribute("aria-hidden", !isOpen);
});


let submitTimes = [];

function isRateLimited() {
  const now = Date.now();
  submitTimes = submitTimes.filter(time => now - time < 60000);
  if (submitTimes.length >= 3) return true;
  submitTimes.push(now);
  return false;
}


const formLoadTime = Date.now();

function isTooFast() {
  return (Date.now() - formLoadTime) / 1000 < 2;
}


const spamWords = [
  "free money", "buy now", "click here", "subscribe", "promo",
  "winner", "congratulations", "act now", "limited offer", "earn money"
];

function containsSpam(text) {
  const lower = text.toLowerCase();
  return spamWords.some(word => lower.includes(word));
}

const fields = {
  name:    { el: document.getElementById("name"),    err: document.getElementById("nameErr") },
  email:   { el: document.getElementById("email"),   err: document.getElementById("emailErr") },
  subject: { el: document.getElementById("subject"), err: document.getElementById("subjectErr") },
  message: { el: document.getElementById("message"), err: document.getElementById("messageErr") },
};

function validateName(val)    { return val.trim().length >= 2; }
function validateEmail(val)   { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()); }
function validateSubject(val) { return val.trim().length >= 3; }
function validateMessage(val) { return val.trim().length >= 10; }

const validators = {
  name:    validateName,
  email:   validateEmail,
  subject: validateSubject,
  message: validateMessage,
};


Object.entries(fields).forEach(([key, { el, err }]) => {
  el.addEventListener("input", () => {
    const valid = validators[key](el.value);
    if (el.value.length > 0) {
      el.classList.toggle("invalid", !valid);
      err.classList.toggle("show", !valid);
    }
  });

  el.addEventListener("blur", () => {
    const valid = validators[key](el.value);
    el.classList.toggle("invalid", !valid);
    err.classList.toggle("show", !valid);
  });
});

function clearFieldErrors() {
  Object.values(fields).forEach(({ el, err }) => {
    el.classList.remove("invalid");
    err.classList.remove("show");
  });
}

function showFieldError(key, focus = true) {
  fields[key].el.classList.add("invalid");
  fields[key].err.classList.add("show");
  if (focus) fields[key].el.focus();
}

const statusMsg = document.getElementById("statusMsg");

function showStatus(msg, type) {
  statusMsg.textContent = msg;
  statusMsg.className = `status-msg show ${type}`;
}

function clearStatus() {
  statusMsg.className = "status-msg";
  statusMsg.textContent = "";
}


const form      = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearStatus();
  clearFieldErrors();

  const nameVal    = fields.name.el.value;
  const emailVal   = fields.email.el.value;
  const subjectVal = fields.subject.el.value;
  const messageVal = fields.message.el.value;

  if (!validateName(nameVal)) {
    showFieldError("name");
    showStatus("Please enter your name.", "error");
    return;
  }

  if (!validateEmail(emailVal)) {
    showFieldError("email");
    showStatus("Please enter a valid email address (e.g. name@example.com).", "error");
    return;
  }

  if (!validateSubject(subjectVal)) {
    showFieldError("subject");
    showStatus("Please add a subject (at least 3 characters).", "error");
    return;
  }

  if (!validateMessage(messageVal)) {
    showFieldError("message");
    showStatus("Your message is too short. Please write at least 10 characters.", "error");
    return;
  }

  if (isTooFast()) {
    showStatus("Submission was too fast. Please take a moment to review your message and try again.", "warn");
    return;
  }

  if (isRateLimited()) {
    showStatus("Too many submissions. Please wait a minute before trying again.", "warn");
    return;
  }

  if (containsSpam(messageVal) || containsSpam(subjectVal)) {
    showStatus("Your message contains blocked spam keywords. Please revise and try again.", "warn");
    return;
  }

  submitBtn.disabled    = true;
  submitBtn.textContent = "Sending…";

  fetch(form.action, {
    method:  "POST",
    body:    new FormData(form),
    headers: { "Accept": "application/json" }
  })
  .then(res => {
    if (res.ok) {
      showStatus("✓ Message sent! I'll get back to you soon.", "success");
      form.reset();
      clearFieldErrors();
    } else {
      showStatus("Something went wrong. Please try again.", "error");
    }
  })
  .catch(() => {
    showStatus("Network error. Check your connection and try again.", "error");
  })
  .finally(() => {
    submitBtn.disabled    = false;
    submitBtn.textContent = "Send Message";
  });
});

} 