'use strict';
import generateSubCatalog from './generateSubCatalog.js';
import { getData } from './getData.js';


export const useCatalog = () => {
  const updateSubCatalog = generateSubCatalog();
  const btnBurger = document.querySelector('.btn-burger'),
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

  const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
  }

  const openSubMenu = (event) => {
    
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item');
    if (itemList) {
      getData.subCatalog(event.target.textContent, (data) => {
        updateSubCatalog(event.target.textContent, data); 
        subcatalog.classList.add('subopen');
      });
      
    }
    if(event.target.closest('.btn-close')){
      closeMenu();
    }

  };

  const closeSubMenu = () => {
    subcatalog.classList.remove('subopen');
  };


  btnBurger.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeMenu();
    }
  })
  catalog.addEventListener('click', openSubMenu);
  subcatalog.addEventListener('click',(event) =>{
    const target = event.target;
    if(target.closest('.btn-return')) closeSubMenu();
  });
  
}

