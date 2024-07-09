// JavaScript to toggle between light and dark modes
document.addEventListener("DOMContentLoaded", function () {
    const modeToggleBtn = document.getElementById("modeToggle");
    const body = document.body;

    modeToggleBtn.addEventListener("click", function () {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }
    });
});
