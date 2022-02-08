//Привет, object
let user = {};

user.name = "Jonh";
user.surname = "Smith";
console.log(user);

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

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
console.log( isEmpty(schedule) );
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) );
console.log( "" );

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

console.log(salariesRes);
console.log( "" );

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

console.log(menu);
multiplyNumeric(menu);
console.log(menu);
console.log( "" );

//Создайте калькулятор
let calculator = {
    first: 0,
    second: 0,
    read: function read() {
        this.first = +prompt("first", this.first);
        this.second = +prompt("second", this.second);
    },
    sum: function sum() {
        console.log((this.first));
        return this.first + this.second;
    },
    mul: function mul() {
        return this.first * this.second;
    },
};
  
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
console.log( "" );

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

ladder.up().up().down().showStep();
