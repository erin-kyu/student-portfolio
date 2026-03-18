const form = document.querySelector("form");
const emailField = document.querySelector("input[name='email']");

// --- Email Validation ---
form.addEventListener("submit", function (e) {
  if (!emailField.value.includes("@")) {
    alert("Enter a valid email");
    e.preventDefault();
    return;
  }
});

// --- Rate Limiting (max 3 submissions per minute) ---
let submitTimes = [];

function isRateLimited() {
  const now = Date.now();

  // Keep only submissions from the last 60 seconds
  submitTimes = submitTimes.filter(time => now - time < 60000);

  // If already 3 submissions, block
  if (submitTimes.length >= 3) {
    return true;
  }

  // Otherwise, record this submission
  submitTimes.push(now);
  return false;
}

form.addEventListener("submit", (e) => {
  if (isRateLimited()) {
    e.preventDefault();
    alert("Too many submissions. Please wait a minute.");
  }
});

// --- Spam Keyword Detection ---
const spamWords = ["free money", "buy now", "click here", "subscribe", "promo"];

function containsSpam(message) {
  const lowerMessage = message.toLowerCase();
  return spamWords.some(word => lowerMessage.includes(word));
}

form.addEventListener("submit", (e) => {
  const message = document.querySelector("#message").value;
  if (containsSpam(message)) {
    e.preventDefault();
    alert("Your message contains blocked spam keywords.");
  }
});
