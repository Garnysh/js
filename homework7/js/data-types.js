'use strict'
//Задача 1
let goods = {
   piano: {
      title: "Пианино",
      price: 3000,
      count: 25
   },
   guitar: {
      title: "Гитара",
      price: 1200,
      count: 40
   },
   drum: {
      title: "Барабаны",
      price: 2700,
      count: 12
   },
   flute: {
      title: "Флейта",
      price: 900,
      count: 50
   },
   harp: {
      title: "Арфа",
      price: 3400,
      count: 5
   }
};

function getPrice(from, to, obj) {
   if (!Number.isInteger(from) && !Number.isInteger(to)) return;
   let newObj = {}
   for (let good in obj) {
      if (obj[good].price > from && obj[good].price <= to) {
         newObj[good] = obj[good];

      }
   }
   return newObj
}
console.log(getPrice(0, 25000, goods))

//Задача 2 
function getGoodsByPrice(title, countToCart, obj) {
   for (let elem in obj) {
      if (title === obj[elem].title) {
         if (obj[elem].count > countToCart) {
            console.log("Товар в наличии");
            obj[elem].count -= countToCart;
         } else {
            console.log("Данного товава в наличии недостаточно");
         }
         return;
      }
   }
   console.log("Товар не найден");
}

getGoodsByPrice("Рояль", 3, goods);
getGoodsByPrice("Флейта", 11, goods);
getGoodsByPrice("Арфа", 5, goods);

//Задача 3 
let books = [{
      author: 'Пушкин',
      title: 'Пир во время чумы',
      pageCount: 5
   },
   {
      author: 'Гоголь',
      title: 'Мертвые души',
      pageCount: 470
   },
   {
      author: 'Лермонтов',
      title: 'Тамань',
      pageCount: 190
   },
   {
      author: 'Гончаров',
      title: 'Обломов',
      pageCount: 610
   },
   {
      author: 'Лермонтов',
      title: 'Герой Нашего Времени',
      pageCount: 191
   },
   {
      author: 'Пушкин',
      title: 'Руслан и Людмила',
      pageCount: 50
   },
   {
      author: 'Лермонтов',
      title: 'Бородино',
      pageCount: 2
   },
];

function getBooks(name, arr) {
   return arr.filter(newBook => name === newBook.author);
}
console.log(getBooks("Пушкин", books));