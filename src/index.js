import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import tmp from "./templates/main.hbs";
import menu from "./menu.json";
import './sass/styles.css';

console.log({ els: menu });
console.log(tmp({ els: menu }));

const listEl = document.querySelector('.menu js-menu');
listEl.innerHTML = tmp({ els: menu });
