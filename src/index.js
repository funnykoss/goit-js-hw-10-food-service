import './sass/main.scss';
import cardsMarckup from './templates/cardsMarckup.hbs';
import menu from './menu.json';
 
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};


const cardsListRefs = document.querySelector('.js-menu');
const cardsRef = cardsMarckup(menu);

createCardsMarkcup(menu);

cardsListRefs.insertAdjacentHTML('beforeend', cardsRef);


function createCardsMarkcup(menu) {
    return menu.map(cardsMarckup);
}

const toggleTheme = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");

bodyRef.classList(Theme.LIGHT);

toggleTheme.addEventListener('change', onSwitchTheme);

function onSwitchTheme(event) {
    if (event.target.id !== "theme-switch-toggle") {
        return;
    }
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);

    onThemeSave(event);
}

function onThemeSave(event) {
    const switchStatus = event.target.checked;
    if (switchStatus) {
      localStorage.setItem('curent-theme', Theme.DARK)  
    }
    if (!switchStatus) {
      localStorage.setItem('curent-theme', Theme.LIGHT)  
    }
}

const savedTheme = localStorage.getItem('curent-theme');
if (savedTheme === Theme.DARK) {
    toggleTheme.chacked = true;
    bodyRef.classList.add(Theme.DARK);
}

