//Задание 1

let i = 0;
while (i <= 2) {
    alert('Привет');
    i++;
}

//Задание 2

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

//Задание 3
let b = 7;
while (b <= 22) {
    console.log(b);
    b++;
}

//Задание 4

let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
};

for (let key in obj) {
    alert(`${key} — зарплата ${obj[key]} долларов.`)
}

//Задание 5

let n = 1000;
let iterationNum = 0;
for (; n > 50; n = n / 2) {
    iterationNum++;
}
alert(`конечное число ${n}, количество итераций ${iterationNum}`);

