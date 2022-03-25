// FUNCTIONS to grab elements
const getSingleElement = (element) => document.querySelector(element);
const getAllElements = (element) =>
    document.querySelectorAll(element);

// ELEMENTS
const navBtn = getSingleElement(".nav-toggle");
const navLinks = getAllElements(".nav__link");

// EVENT LISTENER to toggle .nav display
navBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

// EVENT LISTENERS to remove .nav display
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});
