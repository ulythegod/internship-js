//Привет, object
let user = {};

user.name = "Jonh";
user.surname = "Smith";
// console.log(user);

// user.name = "Pete";
// console.log(user);

// delete user.name;
// console.log(user);

//Проверка на пустоту
function isEmpty(obj) {
    let result = false;

    for (const key in obj) {
        result = true;
        return result;
    }

    return result;
}

let schedule = {};
// console.log( isEmpty(schedule) );
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) );
// console.log( "" );

//Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let salariesRes = 0;

for (const key in salaries) {
    salariesRes += salaries[key];
}

// console.log(salariesRes);
// console.log( "" );

//Умножаем все числовые свойства на 2
function multiplyNumeric(obj) {
    for (const key in obj) {
        if ((typeof obj[key]) == "number") {
            obj[key] = obj[key] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);
// console.log( "" );

//Создайте калькулятор
let calculator = {
    first: 0,
    second: 0,
    read: function read() {
        this.first = +prompt("first", this.first);
        this.second = +prompt("second", this.second);
    },
    sum: function sum() {
        return this.first + this.second;
    },
    mul: function mul() {
        return this.first * this.second;
    },
};
  
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );
//console.log( "" );

//Цепь вызовов
let ladder = {
    step: 0,
    up: function up() {
        this.step = this.step + 1;

        return this;
    },
    down: function down() {
        this.step = this.step - 1;

        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
    }
};

// ladder.up().up().down().showStep();
// console.log( "" );

//Две функции - один объект
let obj = {};

function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A;
let b = new B;

// console.log( a == b );
// console.log( "" );

//Создание калькулятора при помощи конструктора
function Calculator() {
    let calculator = {
        first: 0,
        second: 0,
        read: function read() {
            this.first = +prompt("first", this.first);
            this.second = +prompt("second", this.second);
        },
        sum: function sum() {
            return this.first + this.second;
        },
        mul: function mul() {
            return this.first * this.second;
        },
    };

    return calculator;
}

let calculatorConstructor = new Calculator();
//calculatorConstructor.read();

//console.log( "Sum=" + calculatorConstructor.sum() );
//console.log( "Mul=" + calculatorConstructor.mul() );

//Создаём Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let input = +prompt("input", 0);
        this.value = this.value + input;
    }
}

let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// console.log(accumulator.value);
// console.log( "" );

//this примеры
function f1(){
    return this;
  }
  
  // В браузере:
  //console.log(f1());

  function f2(){
    "use strict"; // см. strict mode
    return this;
  }

  //console.log(f2());

var obj123 = {
    a: 5,
    read: function read() {
        console.log(this);
    },
    readStrict: function readStrict() {
        "use strict";
        console.log(this);
    },
};

// obj123.read();
// obj123.readStrict();

let user3 = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName запустится с данным значением
  user3.fullName = "Alice Cooper";
  
//   console.log(user3.name); // Alice
//   console.log(user3.surname); // Cooper
//   console.log(user3.fullName);

//Алгоритм поиска
let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(pockets.glasses);
// console.log(head.glasses);
// console.log(head);
// console.log(pockets);

//Куда будет произведена запись?
let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
  
//   // У этого хомяка тоже есть еда. Почему? Исправьте
//   console.log( lazy.stomach ); 

//Изменяем "prototype"
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// console.log( rabbit.eats );

// delete Rabbit.prototype.eats;

// console.log( rabbit.eats );

//Создайте новый объект с помощью уже существующего
let objTest = {
    constructor: String,
};

let obj2 = new objTest.constructor("dsfsd");

// console.log(objTest);
// console.log(obj2);
