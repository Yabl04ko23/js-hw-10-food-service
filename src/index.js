import './css/style.css';
import template from './template.hbs';
import menuJSON from './menu.json';

const themeSwitch = document.querySelector('.theme-switch__toggle'),
  body = document.querySelector('body');

themeSwitch.addEventListener("click", function() {
  if (themeSwitch.checked) {
    localStorage.setItem('THEME', 'dark-theme');
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    localStorage.setItem("THEME", 'light-theme');
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
});

document.addEventListener("DOMContentLoaded", function(){
  body.classList.add(localStorage.getItem("THEME"));
  if (body.classList.contains("dark-theme")) {
    themeSwitch.checked = true;
  }
});

const markup = template(menuJSON);
const menu = document.querySelector(".js-menu");

menu.insertAdjacentHTML("beforeend", markup);