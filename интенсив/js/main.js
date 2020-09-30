'use strict';

const btnBurger = document.querySelector('.btn-burger'),
      btnClose = document.getElementById('hnf-menu-close-btn'),
      subcatalog = document.querySelector('.subcatalog'),
      subcatalogHeader = document.querySelector('.subcatalog-header'),
      btnReturn = document.querySelector('.btn-return'),
      catalog = document.querySelector('.catalog');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay)
const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () =>{
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
}

const openSubMenu = (event) =>{
  event.preventDefault();
  const itemList = event.target.closest('.catalog-list__item');
  if(itemList){
    subcatalogHeader.innerHTML = event.target.innerHTML;
    subcatalog.classList.add('subopen');
  }
};

const closeSubMenu = () =>{
  subcatalog.classList.remove('subopen');
};


btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
btnReturn.addEventListener('click', closeSubMenu);
document.addEventListener('keydown', (event) =>{
    if(event.code === 'Escape'){
        closeMenu();
    }
})
catalog.addEventListener('click', openSubMenu);