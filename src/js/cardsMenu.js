
import cardsMarckup from '../templates/cardsMarckup.hbs';
import menu from '../menu.json';
 
const cardsListRefs = document.querySelector('.js-menu');
const cardsRef = cardsMarckup(menu);

createCardsMarkcup(menu);

cardsListRefs.insertAdjacentHTML('beforeend', cardsRef);


function createCardsMarkcup(menu) {
    return menu.map(cardsMarckup);
}
