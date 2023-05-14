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
        console.log(`Поиция числа 4 - ${index}`);
    }
});

