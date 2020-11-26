'use strict'
//Задача 4
let numsArr = [
     [3, 5, -1, 6, 0],
     [56, -9, 111, 6],
     [11, 86, -12],
 ];
 let NewNumsArr = [].concat(numsArr[0], numsArr[1], numsArr[2])
 let newArr = NewNumsArr.map(function(num){
    return  num + 10
 })
 let filtredNewArr = newArr.filter(num => num > 0)
 console.log(filtredNewArr)


