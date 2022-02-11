//Вычислить сумму чисел до данного
function sumToRecursion(x) {
    if (x === 1) {
        return x;
    }
    else {
        return x + sumToRecursion(x - 1);
    }
}
function sumToLoop(x) {
    let result = 0;
    for (let i = 1; i <= x; i++) {
        result += i;
    }
    return result;
}
function sumToProgression(x) {
    let result = 0;
    result = ((1 + x) / 2) * x;
    return result;
}
// console.log(sumToRecursion(100));
// console.log(sumToLoop(100));
// console.log(sumToProgression(100));
//Вычислить факториал
function factorial(x) {
    if (x === 1) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}
//console.log(factorial(5));
//Числа Фибоначчи
function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}
;
// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));
//Вывод односвязного списка
let listOneLinked = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printListRecurcion(list) {
    console.log(list.value, "->");
    if (list.next) {
        printListRecurcion(list.next);
    }
}
function printListLoop(list) {
    console.log(list.value, "->");
    while (list.next) {
        list = list.next;
        console.log(list.value, "->");
    }
}
// printListRecurcion(listOneLinked);
// console.log("");
// printListLoop(listOneLinked);
//Вывод односвязного списка в обратном порядке
function printListRecurcionInderectiveOrder(list) {
    if (list.next) {
        printListRecurcionInderectiveOrder(list.next);
    }
    console.log(list.value, "->");
}
function printListLoopInderectiveOrder(list) {
    let arr = [];
    let n = 0;
    arr.push(list.value);
    while (list.next) {
        list = list.next;
        n++;
        arr.push(list.value);
    }
    for (let i = n; i >= 0; i--) {
        console.log(arr[i], "->");
    }
}
// printListRecurcionInderectiveOrder(listOneLinked);
// console.log("");
// printListLoopInderectiveOrder(listOneLinked);
//Независимы ли счётчики?
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter2() ); // 0 при объявлении counter2 функция makeCounter() вызывается заново, у нее другое лексическое окружение
// console.log( counter2() ); // 1
function Counter() {
    let count = 0;
    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}
let counter1 = new Counter();
// console.log( counter1.up() );
// console.log( counter1.up() );
// console.log( counter1.down() ); 
//Сумма с помощью замыканий
function sum(x) {
    return function (y) {
        return x + y;
    };
}
// console.log(sum(1)(2));
// console.log(sum(5)(-1));
//Фильтрация с помощью функции
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(x, y) {
    return function (n) {
        return n >= x && n <= y;
    };
}
function inArray(x) {
    return function (n) {
        let result = false;
        for (let i = 0; i < x.length; i++) {
            if (n == x[i]) {
                result = true;
            }
        }
        return result;
    };
}
// console.log( arr.filter(inBetween(3, 6)) );
// console.log( arr.filter(inArray([1,2,3])) );
//Сортировать по полю
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(field) {
    return function (a, b) {
        if (a[field] > b[field]) {
            return 1;
        }
        else {
            return -1;
        }
    };
}
// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));
//Армия функций
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            console.log(j); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
