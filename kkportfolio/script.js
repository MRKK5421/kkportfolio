// ===============================
// Animate Skills Bars
// ===============================
const skillBars = document.querySelectorAll(".bar-fill");

function animateSkills() {
  skillBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

// Optional: animate when page loads
document.addEventListener("DOMContentLoaded", animateSkills);

// Optional: animate when skills section scrolls into view
const skillsSection = document.getElementById("skills");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      observer.unobserve(skillsSection); // Only animate once
    }
  });
}, { threshold: 0.5 });

observer.observe(skillsSection);
// Auto update current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector("footer p");
  if (footerText) {
    footerText.textContent = `© ${year} Karunakar Komarthi. All rights reserved.`;
  }
});

// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Scroll smoothly to top on click
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#about ul li");
  items.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    setTimeout(() => {
      item.style.transition = "all 0.6s ease-out";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, index * 150);
  });
});
