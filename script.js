let button = document.getElementById("hamburguer");
const menu = document.getElementById("menu");
button.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});
