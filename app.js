import dropDown from './dropdown.js';
import priceComma from './addcomma.js';
import inventory from './api.js';

console.log(inventory);

const bodyContainer = document.getElementById('body-container');
const navBars = document.getElementsByClassName('directory');
const arrows = document.getElementsByClassName('mini-arrows');
const nav = document.querySelector('nav');

function generateCards(catalogue) {
    catalogue.forEach(item => {
        const card = document.createElement('li');
        const chainImage = document.createElement('img');
        const title = document.createElement('h6');
        const price = document.createElement('p');
        const infoHolder = document.createElement('div');

        price.classList.add('price');
        chainImage.classList.add('chain-img');
        infoHolder.classList.add('info');

        price.textContent = 'Price: $' + priceComma(item.price);
        title.textContent = item.name;
        chainImage.src = item.img;
        
        card.appendChild(chainImage);
        infoHolder.appendChild(title);
        infoHolder.appendChild(price);
        card.appendChild(infoHolder);
        bodyContainer.appendChild(card);
    });
}
function catalogueCatagories(inventory) {
    const categories = [];
    inventory.forEach(section => {
        const department = section[0].category;
        categories.push(department);
    });
    console.log(categories);
    return categories;
} 
generateCards(inventory[0]);


const categories = catalogueCatagories(inventory);

let currenlyShown = document.querySelectorAll('li');
function createChoiced(categories) {
    categories.forEach(category => {
        const navBar = document.createElement('div');
    
        navBar.classList.add('navbar');
        navBar.textContent = category;
        navBar.addEventListener('click', function(e) {
            currenlyShown = document.querySelectorAll('li');
            for(let i = 0; i < currenlyShown.length; i++) {
                bodyContainer.removeChild(currenlyShown[i]);
            }
            const newCategory = e.target.textContent;
            inventory.forEach(item => {
                if(item[0].category === newCategory) {
                    generateCards(item);
                }
            });
        });
        nav.appendChild(navBar);
    });
    const showAll = document.createElement('div');
    showAll.textContent = 'Show All';
    showAll.classList.add('navbar');
    showAll.addEventListener('click', function() {
        currenlyShown = document.querySelectorAll('li');
        for(let i = 0; i < currenlyShown.length; i++) {
            bodyContainer.removeChild(currenlyShown[i]);
        }
        inventory.forEach(item => {
            generateCards(item);
        });
    });
    nav.appendChild(showAll);
}

createChoiced(categories);

nav.style.visibility = 'hidden';
navBars[2].addEventListener('click', function() {
    if(nav.style.visibility === 'hidden') {
        nav.style.visibility = 'initial';
    } else {
        nav.style.visibility = 'hidden';
    }
});

dropDown(navBars, arrows);