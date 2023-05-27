//задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  }));

//задание 2

function isPositive(number) {
    if (number > 0) {
    return number;
    }
};
    
function isMale(obj) {
    if (obj.gender == 'male') {
    return obj;
    }
};
    
function filter(arr,ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i]) != undefined) {
    output.push(ruleFunction(arr[i]));
    };
    };
    return output;
}
    
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const person = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(person, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]

    

//задание 3

//const timer = (deadline) => {
//	const interval = setInterval(() => {
//		console.log(new Date());
//	}, 3000);

//	setTimeout(() => {
//    clearInterval(interval);
//    console.log('30 секунд прошло')
//  }, deadline * 3000)
//};

//timer(10);

//задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));