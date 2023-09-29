const emailInputs = document.querySelectorAll("#email");

document.addEventListener("DOMContentLoaded", function () {
    emailInputs.forEach((input) => {
        input.addEventListener("valid", (e) => handleInputAndChangeEvents(input));
        input.addEventListener("input", () => handleInputAndChangeEvents(input));
    });
});

emailInputs.forEach((input) =>
    input.addEventListener("invalid", (e) => handleInvalidEvent(e, input))
);

function handleInvalidEvent(event, emailInput) {
    event.preventDefault(); // Prevent the default browser validation
    if (emailInput.value) {
        emailInput
            .closest(".input-container")
            .setAttribute("data-invalid", "Check your email..");
    } else {
        emailInput
            .closest(".input-container")
            .setAttribute("data-invalid", "Don't leave this empty.");
    }
}

// Function to handle the input and change events
function handleInputAndChangeEvents(emailInput) {
    emailInput.closest(".input-container").removeAttribute("data-invalid"); // Remove data attribute
}
