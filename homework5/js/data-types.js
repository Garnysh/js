'use strict'
//Задача 1
function goods (count) {
    if (count ===1) {
        console.log (`${count} товар`)
    }
    if (count%10 >=1 && count%10 <= 4 && (count-count%10) != 10) {
        console.log (`${count} товара`)
    }
    else {
        console.log(`${count} товаров`)
    }
}
console.log(goods(12))

//Задача 2
 function range (start, end, step=1) {
let array = [];
for (start; start<=end; start +=step) {
    array.push(start)
}
return array
}
console.log(range(1,10, 2))

//Задача 3
let sum = 0;
function getSum (a) {
    if (a>0) {
        sum += a%10;
        a = Math.floor(a / 10);
        console.log(a, sum);
        return getSum(a, sum)
     }
    else {
        return sum 
    }
}
console.log(getSum(222))