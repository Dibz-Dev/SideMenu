// Grabbing all the unclickable elements I need with classes and use IDs to select elements I need to add event listeners to as I find its more organised.

const sportList = document.querySelector('.sports-layer-list');
const navBar = document.querySelector('.nav');
const menuBar = document.querySelector('.fa-bars')

// defining the icons globally as they are used in multiple places


const minus = document.querySelector('.fa-minus')
const plus = document.querySelector('.fa-plus')

// Created addPlus and addMinus functions so I can call them when needed in other parts of my code

const addPlus = () => {
        plus.setAttribute('style',' ')
        minus.setAttribute('style','display: none')
}

const addMinus = () => {

    plus.setAttribute('style','display: none')
    minus.setAttribute('style','')
}

// Menu bar open

const menuOpen = document.querySelector('#menu-bar').addEventListener('click', () => {

    navBar.classList.add('active')
    menuBar.setAttribute('style', 'display: none')
    // I want the secondary list to be hidden by default so I want to remove active class when the menu is closed.

     sportList.classList.remove('active');

});
// Menu bar close

const menuClose = document.querySelector('#close-btn').addEventListener('click', () => {

      navBar.classList.remove('active')
      menuBar.setAttribute('style', 'display: block')

    //   calling addPlus() again so the icon is reset to its default
      addPlus()
});

// sport layer Toggle

const sportLayer = document.querySelector('#sports-layer').addEventListener('click', (e) => {

    sportList.classList.toggle('active')

    // I also want to toggle the plus / minus icon when clicking the sport list

    if(sportList.classList.contains('active')) {
        addMinus()
    } else {
        addPlus()
    }
});




