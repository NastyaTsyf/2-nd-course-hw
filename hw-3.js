//Задание 1

let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (password == userPassword) {
    alert ('Пароль введен верно');
} else {
    alert ('Пароль введен неправильно');
}

//Задание 2

let c = 2;
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
alert (Number(a) + Number(b));

//Задание 5

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

// Задание 7

let x = prompt ('Пожалуйста, введите любое число');
if (isNaN(x) === true) {
	alert('введено не число');
} else if (x % 2 === 0) {
	alert('Четное');
} else {
	alert('Нечетное');
}


// Задания 8, 9

let clientOS = Number(prompt ('Введите 0, если пользуетесь iOS, 1, если Android'));
let clientDeviceYear = Number(prompt ('Введите год выпуска Вашего устройства'));
if (clientOS == 0) {
    if (clientDeviceYear >= 2015) {
        alert('Установите версию приложения для iOS по ссылке');
    } else {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    }
} else if (clientOS === 1) {
    if (clientDeviceYear >= 2015) {
        alert('Установите версию приложения для Android по ссылке');
    } else {
        alert('Установите облегченную версию приложения для Android по ссылке');
    }
} else {
	alert('Неверный ввод');
}