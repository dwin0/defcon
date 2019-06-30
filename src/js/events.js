window.addEventListener("DOMContentLoaded", () => {
    addCheckboxListener();
});

function addCheckboxListener() {
    const locationCheckboxes = document.getElementsByClassName(
        "filter__checkbox--location"
    );

    Array.prototype.forEach.call(locationCheckboxes, checkbox => {
        checkbox.addEventListener("change", event =>
            toggleLocation(event.target.value, event.target.checked)
        );
    });
}

function toggleLocation(name, show) {
    const locationElements = document.getElementsByClassName("event__location");
    const displayProperty = show ? "block" : "none";

    Array.prototype.forEach.call(locationElements, element => {
        if (element.textContent === name) {
            element.parentNode.style.display = displayProperty;
        }
    });
}
