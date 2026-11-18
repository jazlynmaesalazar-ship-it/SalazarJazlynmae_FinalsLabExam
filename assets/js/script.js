// =========================
// PERSONAL PORTFOLIO SCRIPT
// =========================

// Typing animation
const typingText = document.getElementById("typingText");
const roles = ["Computer Science Student", "Aspiring Web Developer", "Creative Learner"];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];
  typingText.textContent = currentRole.substring(0, charIndex);

  if (!deleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeRole, 95);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeRole, 45);
  } else {
    deleting = !deleting;
    if (!deleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, deleting ? 1200 : 350);
  }
}
typeRole();

// Dark mode / light mode with saved preference
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

function updateThemeIcon() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeToggle.innerHTML = isDark
    ? '<i class="bi bi-sun-fill"></i>'
    : '<i class="bi bi-moon-stars-fill"></i>';
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
  updateThemeIcon();
});

// Current year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Back-to-top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 350);
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Close mobile navigation after selecting a section
document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("mainNav");
    if (navMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});

// Highlight the navigation link for the visible section
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => sectionObserver.observe(section));

// Frontend-only contact form validation.
// This demo validates the fields but does not send or store messages.
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formFeedback.textContent = "";

  if (!contactForm.checkValidity()) {
    event.stopPropagation();
    contactForm.classList.add("was-validated");
    return;
  }

  const name = document.getElementById("contactName").value.trim();
  formFeedback.textContent = `Thank you, ${name}! Your form passed validation. This demo does not send messages.`;
  contactForm.reset();
  contactForm.classList.remove("was-validated");
});
