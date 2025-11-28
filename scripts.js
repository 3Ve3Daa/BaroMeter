const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const faqItems = document.querySelectorAll(".faq-item");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
    navToggle.classList.toggle("active");
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks?.classList.contains("open")) {
      navLinks.classList.remove("open");
      navToggle?.classList.remove("active");
    }
  });
});

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question?.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqItems.forEach((faq) => faq.classList.remove("open"));
    if (!isOpen) {
      item.classList.add("open");
    }
  });
});
