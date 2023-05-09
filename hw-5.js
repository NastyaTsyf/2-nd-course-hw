"use strict"
//Задание 1

function chooseMore(a, b) {
    if (a >= b) {
        console.log (a);
    } else {
        console.log (b);
    }
};

chooseMore(5, 8);
chooseMore(5, 5);

//Задание 2

function checkParity(n) {
    if (n % 2 == 0) {
        console.log ('Число четное');
    } else {
        console.log ('Число нечетное');
    }
};

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
};

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

//Задание 7

function getCircleArea() {
    return this.radius ** 2 * Math.PI;
};

function getCirclePerimeter() {
    return this.radius * 2 * Math.PI;
};

const circle1 = {
    radius: 10,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 20,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


//задание 8

const showSeason = () => {
    let monthNumber = prompt ('Введите номер месяца');
    switch (monthNumber) {
        case '1' :
        case '2' :
        case '12' :
            alert ('Зима');
            break;

        case '3' :
        case '4' :
        case '5' :
            alert ('Весна');
            break;

        case '6' :
        case '7' :
        case '8' :
            alert ('Лето');
            break;

        case '9' :
        case '10' :
        case '11' :
            alert ('Осень');
            break;

        default:
            alert ('Неверный ввод');
            break;
    }
}