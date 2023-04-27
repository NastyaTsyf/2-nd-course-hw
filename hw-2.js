let a = 10;
alert (a);
a = 20;
alert (a); // задание 1

let iPhoneReleaseYear = 2007;
alert (iPhoneReleaseYear); // задание 2

let jsCreator = 'Брендан Эйх';
alert (jsCreator); // задание 3

let x = 10;
let y = 2;
alert (x + y);
alert (x * y);
alert (x / y); // задание 4

alert (2**5); // задание 5

let c = 9;
let b = 2;
alert (c % b); // задание 6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert (num); // задание 7

let age = prompt ('сколько Вам лет?');
alert (age); // задание 8

let user = {
    name: 'Nastya',
    userAge: 26,
    isAdmin: true,
}; // задание 9.0

user["city of residence"] = 'Moscow'; // задание 9.1

user.userAge = 30; // задание 9.2

delete user["city of residence"]; // задание 9.3

let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert (user[info]); // задание 9.4

let yourName = prompt ('как Вас зовут?');
alert (`Привет, ${yourName}!`); // задание 10