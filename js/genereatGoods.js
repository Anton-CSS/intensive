import { getData } from './getData.js';

 const wishlist = [];

const genereatGoods = () => {

  const mainHeader = document.querySelector('.main-header'),
        goodsList = document.querySelector('.goods-list'),
        wrapper = document.querySelector('.wrapper');

    const generaetCards = (data) => {
      goodsList.textContent = '';
      data.forEach(item => {
        console.log(item);
        goodsList.insertAdjacentHTML('afterbegin', `
          <li class="goods-list__item">
            <a class="goods-item__link" href="card.html#${item.id}">
              <article class="goods-item">
                <div class="goods-item__img">
                  <img src="${item.img[0]}"
                  data-second-image="${item.img[1]}" alt="${item.name}">
                </div>
                <h3 class="goods-item__header">${item.name}</h3>
                <p class="goods-item__description">${item.description}</p>
                <p class="goods-item__price">
                  <span class="goods-item__price-value">${item.price}</span>
                  <span class="goods-item__currency"> ₽</span>
                 </p>
                <button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="idd001"></button>
              </article>
            </a>
          </li>
        `);
      });
    };

    if (location.search && location.pathname.includes('goods')){
        const serch = decodeURI(location.search);
        const prop = serch.split('=')[0].slice(1);
        const value = serch.split('=')[1];
        console.log(serch);
      if (prop === 's') {
        if(getData.serch(value, generaetCards) === undefined) {
          const message = document.createElement('div');
          message.textContent = 'По вашему запрсу ничего не найденно';
          wrapper.append(message);
          console.dir(goodsList);
        } else{
          getData.serch(value, generaetCards);
        }
        mainHeader.textContent = `Поиск: ${value}`;
      } else if (prop === 'cat' && value === 'wishlist') {
        (!wishlist.length === 0) ? getData.wishLis(wishlist, generaetCards) : goodsList.innerHTML = '<li>Ваша корзина пуста</li>';
        mainHeader.textContent = `Список желаний`;
      } else if (prop === 'subcat' || value === 'cat') {

        getData.category(prop, value, generaetCards);
        mainHeader.textContent = value;
      }
    }
    
};

export default genereatGoods;