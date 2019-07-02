const hamburgerOpenClass = "hamburger-button--open";
const menuOpenClass = "menu--open";

window.addEventListener("DOMContentLoaded", () => {
    addHamburgerButtonListener();
});

function addHamburgerButtonListener() {
    const hamburgerButton = document.getElementsByClassName(
        "hamburger-button"
    )[0];

    if (!hamburgerButton) {
        console.warn("could not find menu button");
        return;
    }

    const menu = document.getElementsByClassName("menu")[0];

    if (!menu) {
        console.warn("could not find menu");
        return;
    }

    hamburgerButton.addEventListener("click", () => {
        hamburgerButton.classList.toggle(hamburgerOpenClass);
        const wasOpened = menu.classList.toggle(menuOpenClass);
        document.body.style.overflow = wasOpened ? "hidden" : "visible"; // prevent scroll
    });
}
