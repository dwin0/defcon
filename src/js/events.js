window.addEventListener("DOMContentLoaded", () => {
    addCheckboxListener();
    addToggleMoreInformationListener();
});

function addCheckboxListener() {
    const locationCheckboxes = document.getElementsByClassName(
        "filter__checkbox--location"
    );

    Array.from(locationCheckboxes).forEach(checkbox => {
        checkbox.addEventListener("change", event =>
            toggleLocation(event.target.value, event.target.checked)
        );
    });
}

function toggleLocation(name, show) {
    const locationElements = document.getElementsByClassName("event__location");
    const displayProperty = show ? "block" : "none";

    Array.from(locationElements).forEach(element => {
        if (element.textContent === name) {
            element.parentNode.style.display = displayProperty;
        }
    });
}

function addToggleMoreInformationListener() {
    const openMoreButtons = document.getElementsByClassName(
        "event__open-more-information"
    );
    Array.from(openMoreButtons).forEach(button =>
        button.addEventListener("click", () => {
            const event = button.closest(".event");
            const moreInformation = event.querySelector(
                ".event__more-information"
            );
            moreInformation.classList.toggle("event__more-information--hidden");
        })
    );
}
