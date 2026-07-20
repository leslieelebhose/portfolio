// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Contact form validation
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      event.preventDefault();
      alert("Please complete all fields before submitting.");
    } else {
      alert("Thank you! Your message has been sent.");
    }
  });
}

console.log("Portfolio website loaded successfully!");