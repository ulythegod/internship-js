//Перепишите класс
class Clock {
    timer: any = null;

    constructor() {};

    tick(): void {        
        this.timer = setInterval(() => {
            this.render();            
        }, 1000);
    }

    stopTick(): void {
        clearInterval(this.timer);
    }

    render(): void {
        let date: Date = new Date();
        let hours: string | number = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
        let minutes: string | number = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
        let seconds: string | number = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
        let output: string = hours + ":" + minutes + ":" + seconds;

        console.log(output);
    }
}

// let clock: Clock = new Clock();
// setInterval(() => clock.stopTick(), 10000);

class ExtendedClock extends Clock {
    precision: number = 1000;

    constructor(precision: number) {
        super();
        this.precision = precision;
        this.tick(this.precision);
    };

    tick(precision?: number): void {
        if (precision === undefined) {
            super.tick();
        } else {
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
    name: string = "";

    constructor(name: string) {
        this.name = name;
    }
}

class Rabbit1 extends Animal {
    created: number = 0;

    constructor(name: string) {
        super(name);
        this.name = name;
        this.created = Date.now();
    }
}

// let rabbit1 = new Rabbit1("Белый кролик"); // Error: this is not defined
// console.log(rabbit1);

//Класс расширяет объект?
class Rabbit2 extends Object {
    name: string = "";

    constructor(name: string) {
        super();
        this.name = name;
    }
}

// let rabbit2 = new Rabbit2("Кроль");
// console.log( rabbit2.hasOwnProperty('name') );

class PowerArray extends Array {
    constructor(...args: number[]) {
        super(...args);
    }

    isEmpty() {
        return this.length === 0;
    }
}

let arr2 = new PowerArray(1, 2, 5, 10, 50);
console.log(arr2);
console.log(arr2.isEmpty());

let arr3 = new PowerArray();
console.log(arr3);
console.log(arr3.isEmpty());

console.log(arr2 instanceof Array);
console.log(arr2 instanceof PowerArray);
