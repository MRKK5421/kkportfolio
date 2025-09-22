// ===============================
// Animate Skills Bars on Scroll
// ===============================
const skillBars = document.querySelectorAll(".bar-fill");

function animateSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// ===============================
// Typing Animation in Hero Section
// ===============================
const typingText = document.querySelector(".typing-text");
const words = ["Web Apps", "APIs", "Backend Systems", "Full-Stack Projects"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500); // Pause before typing next word
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 120);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ===============================
// Scroll to Top Button
// ===============================
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
