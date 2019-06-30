window.addEventListener("DOMContentLoaded", () => {
    const filter = {
        hideLocations: {},
        hideEvents: {}
    };

    addCheckboxListener(filter);
    addToggleMoreInformationListener();
});

function addCheckboxListener(filter) {
    const locationCheckboxes = document.getElementsByClassName(
        "filter__checkbox--location"
    );
    const eventCheckboxes = document.getElementsByClassName(
        "filter__checkbox--event"
    );

    Array.from(eventCheckboxes).forEach(checkbox =>
        checkbox.addEventListener("click", event => {
            const eventName = event.target.value;
            const hide = !event.target.checked;

            filter.hideEvents[eventName] = hide;

            toggleEvent(filter);
        })
    );

    Array.from(locationCheckboxes).forEach(checkbox =>
        checkbox.addEventListener("click", event => {
            const locationName = event.target.value;
            const hide = !event.target.checked;

            filter.hideLocations[locationName] = hide;

            toggleEvent(filter);
        })
    );
}

function toggleEvent(filter) {
    const eventElements = document.getElementsByClassName("event");

    Array.from(eventElements).forEach(event => {
        eventName = event.querySelector(".event__name").textContent;
        eventLocation = event.querySelector(".event__location").textContent;

        const isHidden =
            filter.hideEvents[eventName] || filter.hideLocations[eventLocation];

        if (isHidden) {
            event.style.display = "none";
        } else {
            event.style.display = "block";
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
