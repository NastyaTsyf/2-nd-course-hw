//Задание 1

let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (password == userPassword) {
    alert ('Пароль введен верно');
} else {
    alert ('Пароль введен неправильно');
}

//Задание 2

let c = Number(2);
if (c > 0 && c < 10) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

//Задание 3

let d = Number(2);
let e = Number(166);
if (d > 100 || e > 100) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

//Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(a =+ b);

//Задание 5

let monthNumber = prompt ('Введите номер месяца');
switch (monthNumber) {
    case '1' :
        alert ('Зима');
        break;
    case '2' :
        alert ('Зима');
        break;

    case '12' :
        alert ('Зима');
        break;

    case '3' :
        alert ('Весна');
        break;

    case '4' :
        alert ('Весна');
        break;

    case '5' :
        alert ('Весна');
        break;

    case '6' :
        alert ('Лето');
        break;

    case '7' :
        alert ('Лето');
        break;

    case '8' :
        alert ('Лето');
        break;

    case '9' :
        alert ('Осень');
        break;

    case '10' :
        alert ('Осень');
        break;

    case '11' :
        alert ('Осень');
        break;

    default:
        alert ('Неверный ввод');
        break;
}