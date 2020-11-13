'use strict';
// Задача 1 
let sum = 10300;
let result;
if (sum < 999) {
    result = 'Скидка не предусмотрена';
} 
else if (1000 <= sum) {
    if (sum <= 1999) {
        result = 'Скидка 5%';
    } else if (sum <= 2999) {
        result = 'Скидка 10%';
    } else {
        result = 'Скидка 10% + подарок!';
    }
}
console.log(result)

//Задача 2 

let lang = 'javascript';
let salary = 10000000;


if (lang == 'javascript') {
    if (salary>=100000) {
        result = 'Приглашаем Вас на собеседование';
    }
    else {
        result = 'Мы Вам перезвоним';
    }
}
console.log(result)

//Задача 3
const month ='Май';
let season;
switch (month) {
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
    season  = 'Зима';
    break;

    case 'Март':
    case 'Апрель':
    case 'Май':
    season  = 'Весна';
    break;
    
    case 'Июнь':
    case 'Июль':
    case 'Август':
    season  = 'Лето';
    break;

    case 'Сентябрь':
    case 'Декабрь':
    case 'Октябрь':
    season  = 'Осень';
    break;
}
console.log(season);
