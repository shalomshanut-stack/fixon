const form = document.getElementById("applicationForm");
const formBox = document.getElementById("formBox");
const messageBox = document.getElementById("messageBox");
const acceptedBox = document.getElementById("acceptedBox");
const studentName = document.getElementById("studentName");
const acceptedTitle = document.getElementById("acceptedTitle");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    formBox.style.display = "none";
    messageBox.style.display = "block";

    setTimeout(function() {
        messageBox.style.display = "none";
        acceptedBox.style.display = "block";

        acceptedTitle.textContent = "Congratulations, " + studentName.value + "!";
    }, 5000);
});