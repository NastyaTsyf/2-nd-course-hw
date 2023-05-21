//Задание 1

let jsStr = 'js';
jsStr = jsStr.toUpperCase();
console.log(jsStr);

//Задание 2

let searchStart = (arr, str) => {
    arr = arr.filter((el => {
            if (el.toLowerCase().startsWith(str.toLowerCase())) {
                return el
            }
        }))
    console.log(arr);
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

//Задание 3

let num = 32.58884;
let less = Math.floor(num);
console.log(less);
let more = Math.ceil(num);
console.log(more);
let whole = Math.round(num);
console.log(whole);

//Задание 4

let min = Math.min(52, 53, 49, 77, 21, 32);
console.log(min);

let max = Math.max(52, 53, 49, 77, 21, 32);
console.log(max);

//Задание 5

let getRandom = (a) => {
    a = Math.random() * 10;
    console.log(a);
};

getRandom();

//Задание 6

let getRandomArrNumbers = (y) => {
    let arr = [];
    for (let i = 0; i < Math.round(y / 2); i++) {
        arr.push(Math.round(Math.random() * y));
    }
    console.log(arr);
}

getRandomArrNumbers(10);


//Задание 7

let randomNum = (max, min) => {
    max = Math.round(max);
    min = Math.round(min);
    let a = Math.round(Math.random() * (max - min)) + min;
    console.log(a);
}

randomNum(4.8855, 98.9522);

//Задание 8

let myDate = new Date("05/21/2023");
console.log(myDate);

//Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 75);
console.log(currentDate);


//Задание 10

