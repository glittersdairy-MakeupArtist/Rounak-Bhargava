// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // adjust for navbar height
          behavior: "smooth"
        });
      }
    }
  });
});

// Auto-scroll testimonials (optional)
const testimonialsContainer = document.querySelector("#testimonials .flex");
if (testimonialsContainer) {
  setInterval(() => {
    testimonialsContainer.scrollBy({ left: 320, behavior: "smooth" });
    if (testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth >= testimonialsContainer.scrollWidth) {
      testimonialsContainer.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 4000);
}
