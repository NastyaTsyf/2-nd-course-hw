"use strict"
//Задание 1

function chooseMore(a, b) {
    if (a >= b) {
        console.log (a);
    } else {
        console.log (b);
    }
}

chooseMore(5, 8);
chooseMore(5, 5);

//Задание 2

function checkParity(n) {
    if (n % 2 == 0) {
        console.log ('Число четное');
    } else {
        console.log ('Число нечетное');
    }
}

checkParity(9);

//Задание 3
//3.1 

const calcSquare = (x) => {
    console.log (x ** 2);
};
calcSquare(6);

//3.2

const returnSquare = (x) => {
    return x ** 2;
};
console.log (returnSquare(5));

//Задание 4

let age = prompt ('Сколько Вам лет');

const greet = () => {
    if (age >= 0 && age <= 12) {
        console.log ('Привет, друг!');
    } else if (age >= 13) {
        console.log ('Добро пожаловать!');
    } else {
        console.log ('Вы ввели неправильное значение');
    }
}

greet();

//Задание 5

let b = prompt ('Введите первое число');
let c = prompt ('Введите второе число');

const checkNumbers = () => {
    if (isNaN(b) == true || isNaN(c) == true ) {
        console.log ('Одно или оба значения не являются числом');
    } else {
        console.log (b * c);
    }
};

checkNumbers();

//Задание 6

let y = prompt ('Введите число');

const calcСube = () => {
    if (isNaN(y) == true) {
        console.log ('Переданный параметр не является числом');
    } else {
        console.log (`${y} в кубе равняется ${y ** 3}`);
    }
};

calcСube();
