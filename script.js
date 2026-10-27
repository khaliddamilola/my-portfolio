// ===== 1. MOBILE MENU =====
// Find the menu button and the list of links
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

// When the button is clicked, show or hide the links
menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// When any link is clicked, close the menu
const allLinks = navLinks.querySelectorAll("a");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});


// ===== 2. AUTOMATIC YEAR IN THE FOOTER =====
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();


// ===== 3. BACK TO TOP BUTTON =====
const toTopButton = document.getElementById("to-top");

toTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
