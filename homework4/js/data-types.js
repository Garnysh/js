'use strict';
// Задача 1 
let s1 = "дом домик домой одомашненный";
let s2 = "дом";
let count = 0;

let indexOf = s1.indexOf(s2);
while (indexOf > -1) {
    count++;
    indexOf = s1.indexOf(s2, (indexOf + 1));
}
console.log(count);

//Задание 2 
let pal = "а роза упала на лапу Азора";
let pal2 = pal.split(' ').reverse().join('').toLowerCase();
let result = pal2 === pal2.split(' ').reverse().join('').toLowerCase() ? 'Является палиндромом' : 'Не является палиндромом';
console.log(result);

//Задание 3

let a  = "hELLo";
let b = a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase();
console.log(b);

//Задание 4 
let words = "в предложении все слова разной длины";
let arr = words.split(' ');
let word = "";
for (let elem of arr) {
    if (elem.length > word.length) {
        word = elem;
    }
}
console.log(word);