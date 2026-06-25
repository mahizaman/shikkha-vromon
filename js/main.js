// ===== Navbar shadow on scroll =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 6px 24px rgba(37,43,107,0.12)";
  } else {
    navbar.style.boxShadow = "0 2px 8px rgba(37,43,107,0.06)";
  }
});

// ===== Auto-close mobile menu on link click =====
const navToggle = document.getElementById("nav-toggle");
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navToggle) navToggle.checked = false;
  });
});

// ===== Scroll reveal animation =====
const revealEls = document.querySelectorAll(
  ".feature-card, .country-card, .service-card, .testi-card, .step, .fact-card, .info-block, .stat"
);
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));
