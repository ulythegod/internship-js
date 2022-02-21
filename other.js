//Ошибка при чтении несуществующего свойства
let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            if (prop in target) {
                return target[prop];
            } else {
                return "Ошибка: такого свойства не существует";
            }
        }        
    });
  }
  
  user = wrap(user);
  
//   alert(user.name); // John
//   alert(user.age); // Ошибка: такого свойства не существует

//Получение элемента массива с отрицательной позиции
let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }

        return Reflect.get(target, prop, receiver);
    }
});

// console.log( array[-1] ); // 3
// console.log( array[-2] ); // 2

//Observable
function makeObservable(target) {
    let handlers = Symbol('handlers');

    target[handlers] = [];
    
    target.observe = function(handler) {
        this[handlers].push(handler);
    };

    return new Proxy(target, {
        set(target, property, value, receiver) {
            let res = Reflect.set(...arguments);

            if (res) {
              target[handlers].forEach(handler => handler(property, value));
            }

            return res;
        }       
    });
}

let user2 = {};
user2 = makeObservable(user2);

user2.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user2.name = "John";
user2.age = 13;

//Eval-калькулятор
// let math = prompt("input operation", "")
// let res = eval(math);
// console.log(res);

//Проверка, целое ли число
function isInteger(num) {
    let intPart = num ^ 0;

    if (num - intPart !== 0) {
        return false;
    } else {
        return true;
    }
}

// console.log( isInteger(1) );
// console.log( isInteger(1.5) );
// console.log( isInteger(-0.5) );

//Отсортируйте массив с буквой ё
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();

animals.sort((a, b) => collator.compare(a, b));

console.log( animals );
