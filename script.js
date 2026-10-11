/* Little Scholars Hub - Website Configuration */
const SITE_CONFIG = {
  googleFormUrl: "https://forms.gle/ZWsastk2S9yeyhiZA",
  phoneNumber: "917889099363"
};

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  if (!toast) {
    alert(message);
    return;
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

// Registration button: opens the Google Form in a new tab.
const formButton = document.getElementById("registerButton");
if (formButton) {
  formButton.href = SITE_CONFIG.googleFormUrl;
  formButton.target = "_blank";
  formButton.rel = "noopener noreferrer";
}

// WhatsApp chat link. Visitors can start a voice/video call from WhatsApp after opening the chat.
const phone = SITE_CONFIG.phoneNumber.replace(/\D/g, "");
const whatsappUrl = `https://wa.me/${phone}`;
["headerWhatsApp", "contactWhatsApp"].forEach((id) => {
  const button = document.getElementById(id);
  if (button) {
    button.href = whatsappUrl;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  }
});

// The enquiry form submits directly to FormSubmit. It does not open the visitor's email app.
// FormSubmit may require one-time activation from the receiving inbox.
// Its _autoresponse feature is configured in the form's HTML.

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Automatically update the footer year
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
