
var button = document.querySelector(".menu-toggle");

button.addEventListener("click", function () {
    document.querySelector("#sidebar-wrapper").classList.toggle("open");
});