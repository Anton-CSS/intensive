export const loadData = () =>{

    if(location.search){
        const serch = decodeURI(location.search);
        const prop = serch.split('=')[0].slice(1);
        const value = serch.split('=')[1];
    }

    if(location.hash){
        console.log('hash');
    }

    if(location.pathname.includes('cart')){
      console.log('cart');
    }

};