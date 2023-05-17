// Задание 1

let numbers = [1, 5, 4, 10, 0, 3];

for (let item of numbers) {
    console.log(item);
    if (item == 10) {
        break;
    }
};

// Задание 2

let array = [1, 5, 4, 10, 0, 3];

array.forEach((el, index) => {
    if (el == 4) {
        console.log(`Позция числа 4 - ${index}`);
    }
});

// Задание 3

let arr = [1, 3, 5, 10, 20];
arr = arr.join([' ']);
console.log(arr);

// Задание 4

let multArr = [];

for (let a = 0; a < 3; a++) {
    multArr[a] = [];

    for (let b = 0; b < 3; b++) {
        const element = array[b];
        multArr[a].push(1);
    };
};
console.log(multArr);

// Задание 5

let numArr = [1, 1, 1];
numArr.push(2, 2, 2);
console.log(numArr);