'use strict';

//Задача 1
let i = 1;
let a = 2;
while (i<20) {
   if (a=a*2){
       console.log(a);
   }
   i++; 
}

//Задача 2
let c = 0;
let b = 95;
 while (b>0) {
     if (b=b-(c+5)) {
         console.log(b);
     }
 }

 //Задача 3
let fairy = 20;
let plate = 10;
while (fairy>0 && plate>0) {
    fairy-=0.5;
    plate-=1;
    i++;
    console.log(`Моющего средства осталось ${fairy}`);
 }
 console.log(`Моющего средства осталось: ${fairy}, тарелок осталось: ${plate}`);

//Задача 4 
let arr = [];
for (let i=0, l=10; i<l; i++) {
    arr.push(Math.round(Math.random() * l))
}
let m = 0;
for (i=0; i<10; i++){
    m += arr[i]/10;
}
console.log(m); 
console.log(arr);

