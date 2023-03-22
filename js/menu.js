const hamburger = document.querySelector(".menu");
const menu = document.querySelector(".menu-navegacion");

/* console.log(menu);
console.log(hamburger); */

hamburger.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburger
  ) {
    menu.classList.toggle("spread");
  }
});

let alertShown = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1400 && !alertShown) {
    alert("¡Prueba de abrir una de las imágnes!");
    alertShown = true;
  }
});
