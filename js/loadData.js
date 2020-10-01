import { getData } from './getData.js';

const wishlist = ['idd005', 'idd100', 'idd077', 'idd033']

export const loadData = () =>{
    if(location.search){
        const serch = decodeURI(location.search);
        const prop = serch.split('=')[0].slice(1);
        const value = serch.split('=')[1];
        console.log(prop, value);
        if(prop === 's'){
          getData.serch( value, (data) => console.log(data));
        } else if(prop === 'cat' && value === 'wishlist'){
          getData.wishLis(wishlist, (data) => console.dir({wishlist: data}));
        } else if(prop === 'cat' || value === 'subcat'){
          getData.category(prop, value, (data) => console.log(data));
        }
    }

    if(location.hash){
        getData.item(location.hash.slice(1), (data) => console.log(data));
    }

    if(location.pathname.includes('cart')){
      getData.cart(cardList, (data) => console.log(data));
      
    }

};