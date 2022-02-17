//Перепишите класс
class Clock {
    constructor() {
        this.timer = null;
    }
    ;
    tick() {
        this.timer = setInterval(() => {
            this.render();
        }, 1000);
    }
    stopTick() {
        clearInterval(this.timer);
    }
    render() {
        let date = new Date();
        let hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
        let minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
        let seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
        let output = hours + ":" + minutes + ":" + seconds;
        console.log(output);
    }
}
// let clock: Clock = new Clock();
// setInterval(() => clock.stopTick(), 10000);
class ExtendedClock extends Clock {
    constructor(precision) {
        super();
        this.precision = 1000;
        this.precision = precision;
        this.tick(this.precision);
    }
    ;
    tick(precision) {
        if (precision === undefined) {
            super.tick();
        }
        else {
            this.timer = setInterval(() => {
                this.render();
            }, this.precision);
        }
    }
}
// let clock: Clock = new ExtendedClock(5000);
// setInterval(() => clock.stopTick(), 10000);
//Ошибка создания экземпляра класса
class Animal {
    constructor(name) {
        this.name = "";
        this.name = name;
    }
}
class Rabbit1 extends Animal {
    constructor(name) {
        super(name);
        this.created = 0;
        this.name = name;
        this.created = Date.now();
    }
}
// let rabbit1 = new Rabbit1("Белый кролик"); // Error: this is not defined
// console.log(rabbit1);
//Класс расширяет объект?
class Rabbit2 extends Object {
    constructor(name) {
        super();
        this.name = "";
        this.name = name;
    }
}
// let rabbit2 = new Rabbit2("Кроль");
// console.log( rabbit2.hasOwnProperty('name') );
class PowerArray extends Array {
    constructor(...args) {
        super(...args);
    }
    isEmpty() {
        return this.length === 0;
    }
}
// let arr2 = new PowerArray(1, 2, 5, 10, 50);
// console.log(arr2);
// console.log(arr2.isEmpty());
// let arr3 = new PowerArray();
// console.log(arr3);
// console.log(arr3.isEmpty());
// console.log(arr2 instanceof Array);
// console.log(arr2 instanceof PowerArray);
//Наследование от SyntaxError
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "";
        this.name = "FormatError";
    }
}
let err = new FormatError("ошибка форматирования");
console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack
console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true
