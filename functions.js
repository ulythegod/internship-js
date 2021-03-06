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
//let counter1 = new Counter();
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
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
//Установка и уменьшение значения счётчика
function makeCounter1() {
    function counter() {
        return ++counter.count;
    }
    ;
    counter.set = (value) => counter.count = value;
    counter.decrease = () => {
        return --counter.count;
    };
    counter.count = 0;
    return counter;
}
// let counter1: any = makeCounter1();
// console.log(counter1);
// console.log(counter1());
// console.log(counter1.decrease());
// console.log(counter1.set(3));
// console.log(counter1());
// console.log(counter1.decrease());
//Сумма с произвольным количеством скобок
function sum1(x) {
    function sum(b) {
        sum.currentSum += b;
        return sum;
    }
    sum.toString = function () {
        return sum.currentSum;
    };
    sum.currentSum = x;
    return sum;
}
// console.log(sum1(1)(2).toString());
// console.log(sum1(1)(2)(3).toString());
// console.log(sum1(5)(-1)(2).toString());
// console.log(sum1(6)(-1)(-2)(-3).toString());
// console.log(sum1(0)(1)(2)(3)(4)(5).toString());
//Вывод каждую секунду
function printNumbersTimeout(from, to) {
    console.log(from);
    if (from < to) {
        setTimeout(printNumbersInterval, 1000, ++from, to);
    }
}
//setTimeout(printNumbersInterval, 1000, 1, 10);
function printNumbersInterval(from, to) {
    let current = from;
    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}
//printNumbersInterval(1, 10);
//Декоратор-шпион
let work = function (a, b) {
    console.log(a + b); // произвольная функция или метод
};
function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}
// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
//Задерживающий декоратор
function f(x) {
    console.log(x);
}
function delay(func, time) {
    function wrapper(...args) {
        return setTimeout(() => func.apply(this, arguments), time);
    }
    return wrapper;
}
// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
// f1000("test1"); // показывает "test" после 1000 мс
// f1500("test2");
//Декоратор debounce
function fDebounce(x) {
    console.log(x);
}
function debounce(func, time) {
    function wrapper(...args) {
        if (!wrapper.isCooldown) {
            wrapper.isCooldown = true;
            return setTimeout(() => { wrapper.isCooldown = false; func.apply(this, arguments); }, time);
        }
        else {
            return false;
        }
    }
    wrapper.isCooldown = false;
    return wrapper;
}
let f3 = debounce(fDebounce, 1000);
// f3(1); // выполняется немедленно
// f3(2);
// setTimeout( () => f3(3), 100);
// setTimeout( () => f3(4), 1100);
// setTimeout( () => f3(5), 1500);
//Тормозящий (throttling) декоратор
function fThrottle(x) {
    console.log(x);
}
function throttle(func, time) {
    function wrapper(...args) {
        if (wrapper.isCooldown) {
            wrapper.this = this;
            wrapper.savedArgs = arguments;
            return false;
        }
        func.apply(this, arguments);
        wrapper.isCooldown = true;
        setTimeout(() => {
            wrapper.isCooldown = false;
            if (wrapper.savedArgs && wrapper.this) {
                wrapper.apply(wrapper.this, wrapper.savedArgs);
            }
            wrapper.savedArgs = null;
            wrapper.this = null;
        }, time);
    }
    wrapper.isCooldown = false;
    wrapper.savedArgs = null;
    wrapper.this = null;
    return wrapper;
}
// let f4 = throttle(fThrottle, 1000);
// f4(1); // показывает 1
// f4(2); // (ограничение, 1000 мс ещё нет)
// f4(3);
//Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar")
        ok();
    else
        fail();
}
let user = {
    name: 'Вася',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//Использование частично применённой функции для логина
function askPassword1(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar")
        ok();
    else
        fail();
}
let user1 = {
    name: 'John',
    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};
askPassword1(user1.login.bind(user1, true), user1.login.bind(user1, false));
