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
