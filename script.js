const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".navbar-toggle");
const navigationLinks = navbar.querySelectorAll("a");

function closeMenu() {
    navbar.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    navbar.classList.toggle("menu-open", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Open navigation" : "Close navigation"
    );
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.matchMedia("(min-width: 601px)").addEventListener("change", closeMenu);
document.documentElement.classList.add("js");
