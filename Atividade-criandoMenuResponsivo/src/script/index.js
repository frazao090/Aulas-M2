const menuButton = document.querySelector(".nav__button");
const menu = document.querySelector(".list");
const hamburguer = document.querySelector(".nav__img")

menuButton.addEventListener("click", function(){
  menu.classList.toggle("show");
});