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