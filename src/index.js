import { page } from './content.js';
import { menu } from './menu.js';
import { about } from './about.js';

function clearDom () {
    const container = document.querySelector(".container")
    
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const home_button = document.querySelector('.home');
const menu_button = document.querySelector('.menu');
const about_button = document.querySelector('.about');

home_button.onclick = () => {
    clearDom();
    page();
};

menu_button.onclick = () => {
    clearDom();
    menu();
};

about_button.onclick = () => {
    clearDom();
    about();
};

page();
