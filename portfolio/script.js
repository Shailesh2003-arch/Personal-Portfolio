// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through the links and add a click event listener
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    navLinks.forEach((nav) => nav.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
