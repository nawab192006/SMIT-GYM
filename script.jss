AOS.init({
  duration: 1000,
  once: true
});


document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }

  
  const feedbackForm = document.querySelector("#feedback form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("💬 Thanks for your feedback! We appreciate you.");
      feedbackForm.reset();
    });
  }
});