const PARAM = {
  cat: 'category',
  subcat: 'subcategory',
  serch: ['category', 'subcategory', 'name', 'description', ]
}


export const getData = {
  url: 'database/dataBase.json',
  get(process){
    fetch(this.url)
      .then(response => response.json())
      .then(process)
  },
  wishLis(list, callback){
    this.get((data) => {
      const result = data.filter(item => list.includes(item.id));
      callback(result);
    })
  },

  item(value, callback){
    this.get((data) => {
      const result = data.find(item => item.id === value);
      callback(result);
    })
  },

  cart(list, callback){
    this.get((data) => {
      const result = data.filter(item => list.som(obj => obj.id === item.id));
      callback(result);
    })
  },

  category(prop, value, callback){
    this.get((data) => {
      const result = data.filter(item => item[PARAM[prop]].toLowerCase() === value.toLowerCase());
      callback(result);
    })
  },

  serch(value, callback){
    this.get((data) => {
      const result = data.filter(item => {
        for (let key in item){
            if( PARAM.serch.includes(key) && item[key].toLowerCase().includes(value.toLowerCase()) ){
              return true;
            }
        } 
      });
      callback(result);
    })
  },
  catalog(callback){
    this.get((data) => {
      const result = data.reduce((arr, item) =>{
        if(!arr.includes(item.category)){
          arr.push(item.category);
        }
        return arr;
      }, []);
      callback(result);
    });
  },
  subCatalog(value, callback){
    this.get((data) => {
      const result = data.filter((item) => item.category === value)
      .reduce((arr, item) =>{
        if(!arr.includes(item.subcategory)){
          arr.push(item.subcategory);
        }
        return arr;
      }, []);
        
        callback(result);
    });
    
  }
}