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