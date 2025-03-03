document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementsByName("email")[0];
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else {
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);
            alert("Thank you for your submission!");
            form.reset();
        }
    });
});
