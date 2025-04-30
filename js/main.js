let btnOpenMenu = document.querySelector('#open-menu');
let btnCloseMenu = document.querySelector('#close-menu');
let menu = document.querySelector('#mobile-menu');

btnOpenMenu.addEventListener('click', () => {
  menu.classList.remove('disabled');
})

btnCloseMenu.addEventListener('click', () => {
  menu.classList.add('disabled');
})

let docElem = document.documentElement;
let barrita = document.querySelector("#progress");

window.addEventListener("scroll", () => {
  let winScroll = docElem.scrollTop;
  let height = docElem.scrollHeight - docElem.clientHeigh;
  let scrolled = (winScroll / height) * 100;
  barrita.style.width = scrolled + "%";
})