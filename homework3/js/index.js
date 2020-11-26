'use strict';

//Задача 1
let i = 1;
let a = 2;
while (i < 20) {
    if (a = a * 2) {
        console.log(a);
    }
    i++;
}

//Задача 2
let c = 0;
let b = 95;
while (b > 0) {
    if (b = b - (c + 5)) {
        console.log(b);
    }
}

//Задача 3
let fairy = 20;
let plate = 10;
while (fairy > 0 && plate > 0) {
    fairy -= 0.5;
    plate -= 1;
    i++;
    console.log(`Моющего средства осталось ${fairy}`);
}
console.log(`Моющего средства осталось: ${fairy}, тарелок осталось: ${plate}`);

//Задача 4 
let arr = [];
for (let i = 0, l = 10; i < l; i++) {
    arr.push(Math.round(Math.random() * l))
}
let m = 0;
for (i = 0; i < 10; i++) {
    m += arr[i] / 10;
}
console.log(m);
console.log(arr);

//Задание 5 
let array = [3, 2, 6, 8, 4, 12, 9, 17];
for (let array1 = 0; array1 <= array.length; array1++) {
    for (let array2 = 0; array2 <= array.length; array2++) {
        if (array[array1] + array[array2] === 7) {
            console.log(`Элементы с индексами ${array1} и ${array2} дают в сумме 7`)
        }
    }
}

//Задание 6
let sumMulti = 0;
let multi = [
    [23, 56, 78, 12, -900],
    [0, 0, 67, -3, 621],
    [89, 67, 12],
    [23, 56, 78, 12, -900, 89, 33, 21]
];
for (let q=0; q<=multi.length; q++) {
   for (let w = 0; q <=multi[q].length; w++ ){
       multi[q][w] +=10;
       sumMulti+=multi[q][w]
   } 
}
console.log(sumMulti)


