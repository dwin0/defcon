const activeClassName = "topic__form-label--focus";

window.addEventListener("DOMContentLoaded", () => {
    addLabelHighlightListener();
});

function addLabelHighlightListener() {
    const formInputs = document.getElementsByClassName("topic__form-input");

    Array.from(formInputs).forEach(input =>
        input.addEventListener("focus", () => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            label.classList.add(activeClassName);
        })
    );

    Array.from(formInputs).forEach(input =>
        input.addEventListener("focusout", () => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            label.classList.remove(activeClassName);
        })
    );
}
