'use strict';

const btnBurger = document.querySelector('.btn-burger'),
      btnClose = document.getElementById('hnf-menu-close-btn'),
      overlay = document.querySelector('.overlay'),
      catalog = document.querySelector('.catalog');

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () =>{
    catalog.classList.remove('open');
    overlay.classList.remove('active');
}

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', (event) =>{
    if(event.code === 'Escape'){
        closeMenu();
    }
})