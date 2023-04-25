let A = 10;
alert (A);
A = 20;
alert (A); // задание 1

let year = 2007;
alert (year); // задание 2

let creatorName = 'Брендан Эйх';
alert (creatorName); // задание 3

let x = 10;
let y = 2;
alert (x + y);
alert (x * y);
alert (x / y); // задание 4

alert (2**5); // задание 5

let a = 9;
let b = 2;
alert (a % b); // задание 6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert (num); // задание 7

let Age = prompt ('сколько Вам лет?');
alert (Age); // задание 8

let user = {
    name: 'Nastya',
    age: 26,
    isAdmin: true,
}; // задание 9.0

user["city of residence"] = 'Moscow'; // задание 9.1

user.age = 30; // задание 9.2

delete user["city of residence"]; // задание 9.3

let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert (user[info]); // задание 9.4

let yourName = prompt ('как Вас зовут?');
alert (`Привет, ${yourName}!`); // задание 10