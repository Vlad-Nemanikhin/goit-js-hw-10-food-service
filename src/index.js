import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import tmp from "./templates/main.hbs";
import menu from "./menu.json";
import './sass/styles.css';
import './js/theme-switch';

const listEl = document.querySelector('.js-menu');
listEl.innerHTML = tmp(menu);


