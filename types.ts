//Можно ли добавить свойство строке?
let str: string = "Привет";

// str.test = 5;//property test does not exists on type string

// alert(str.test);

//Сумма пользовательских чисел
function sumNumbers(): void {
    let first: number = Number(prompt("first", "0"));
    let second: number = Number(prompt("first", "0"));

    console.log(first + second);    
}

//sumNumbers();

//Ввод числового значения
function readNumber() {
    let input: any = +prompt("input number", "");

    while (!isFinite(input)) {
        input = +prompt("input number", "");
    }

    if (input == null || input == "") {
        return null;
    } else {
        return input;
    }
}

//console.log(readNumber());

//Случайное число от min до max
function random(min: number, max: number): number {
    let result: number = Math.floor(min + (Math.random() * (max - min)));

    return result;
}

// console.log( random(1, 10) );
// console.log( random(1, 5) );
// console.log( random(1, 5) );

//Сделать первый символ заглавным
function ucFirst(str: string): string {
    let strArray: string[] = str.split("");

    return strArray.map((val, index) => {
        if (index == 0) {
            return val.toUpperCase();
        } else {
            return val;
        }
    }).join("");
}

//console.log(ucFirst("вася"));

//Проверка на спам
function checkSpam(str: string): boolean {
    let isSpam: boolean = false;

    str = str.toLowerCase();

    if (str.includes("viagra") || str.includes("XXX".toLowerCase())) {
        isSpam = true;
    }

    return isSpam;
}

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

//Усечение строки
function truncate(str: string, maxlength: number): string {
    let result: string = "";

    if (str.length > maxlength) {
        let strArray: string[] = str.split("");
        console.log(strArray);
        let deletedAmount = str.length - maxlength;

        strArray.splice(maxlength - 1, deletedAmount + 1);
        strArray.push("...");

        console.log(strArray);

        result = strArray.join("");
    } else {
        result = str;
    }

    return result;
}

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

//Выделить число
function extractCurrencyValue(str: string): number {
    let strArray: string[] = str.split("");
    
    for (let i = 0; i < strArray.length; i++) {
        if (isNaN(Number(strArray[i]))) {
            strArray.splice(i, 1);
        }       
    }
    
    return Number(strArray.join(""));
}

//console.log(extractCurrencyValue("$120"));

//Фильтрация уникальных элементов массива
function unique(arr: string[]): Set<string> {
    let setOfValues: Set<string> = new Set();

    for (let i = 0; i < arr.length; i++) {
        setOfValues.add(arr[i]);        
    }

    return setOfValues;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//console.log( unique(values) );

function aclean(arr: string[]): string[] {
    let result: string[] = [];
    let setOfUniqueValues: Set<string> = new Set();

    for (let i = 0; i < arr.length; i++) {
        let sorted: string = arr[i].toLowerCase().split("").sort().join("");

        setOfUniqueValues.add(sorted);
    }   

    return Array.from(setOfUniqueValues);
}

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log( aclean(arr) );

//Перебираемые ключи
let map = new Map();

map.set("name", "John");

let keys: string[] = [];

for (let key of map.keys()) {
    keys.push(key);
}

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");


//Сумма свойств объекта
let salaries: object = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries: object): number {
    let result: number = 0;

    if (salaries && typeof salaries === "object") {
        let values: number[] = Object.values(salaries);

        for (const key in values) {
            result += values[key];
        }        
    }

    return result;
}

//console.log( sumSalaries(salaries) );

//Подсчёт количества свойств объекта
let user: object = {
    name: 'John',
    age: 30,
    something1: false,
    something2: null,
    something3: undefined
};

function count(user: object): number {
    let result: number = 0;

    if (user && typeof user === "object") {
        result =  Object.values(user).length;     
    }

    return result;
}

//console.log( count(user) );

//Деструктурирующее присваивание
interface UserDestr {
    nameUser: string;
    years: number;
    isAdmin: boolean
}

let user2: UserDestr = {
    nameUser: "John",
    years: 30,
    isAdmin: false
};

let {nameUser, years: age, isAdmin = false}: UserDestr = user2;

// console.log( nameUser );
// console.log( age );
// console.log( isAdmin );

//Максимальная зарплата
let salaries2: any = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries: any): string | null {
    let result: string | null = null;

    if (salaries) {
        let maxValue: any = 0;
        for (let [key, value] of Object.entries(salaries)) {
            if (value > maxValue) {
                maxValue = value;
                result = key;
            }
        }        
    }

    return result;
}

//console.log(topSalary({}));

//Создайте дату
let date: any = new Date(2012, 1, 20);
//console.log(date);

//Покажите день недели
let dateofWeek = new Date(2022, 1, 10);
let dateofWeek2 = new Date(2022, 1, 13);
let dateofWeek3 = new Date(2022, 1, 12);

function getWeekDay(date: any): string {
    let result: string = "";

    let days: string[] = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];    
    result = days[date.getDay()];

    return result;
};

//console.log( getWeekDay(dateofWeek) ); 

//День недели в европейской нумерации
function getLocalDay(date: any): number {
    let result: number;

    if (date.getDay() === 0) {
        result = 7;
    } else {
        result = date.getDay();
    }

    return result;
}

// console.log( getLocalDay(dateofWeek) ); 
// console.log( getLocalDay(dateofWeek2) ); 
// console.log( getLocalDay(dateofWeek3) ); 

//Какой день месяца был много дней назад?
function getDateAgo(date: any, days: number): any {
    let result: any = new Date(date);

    result.setDate(date.getDate() - days);    

    return result;
}

// console.log( getDateAgo(dateofWeek, 1) );
// console.log( getDateAgo(dateofWeek, 2) );
// console.log( getDateAgo(dateofWeek, 365) );

function getLastDayOfMonth(year: number, month: number): number {
    let result: number;

    let date: any = new Date(year, month + 1, 0);
    result = date.getDate();    

    return result;
}

//console.log( getLastDayOfMonth(2022, 1) );

//Сколько сегодня прошло секунд?
function getSecondsToday(): number {
    let date = new Date();
    
    return date.getSeconds() + (date.getMinutes() * 60) + (date.getHours() * 3600);
}

//console.log(getSecondsToday());

//Сколько секунд осталось до завтра?
function getSecondsToTomorrow(): number {
    let today: any = new Date();
    let tomorrow: any = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    let diff: any = tomorrow - today;
    
    return Math.round(diff / 1000);
}

//console.log(getSecondsToTomorrow());

//Форматирование относительной даты
function formatDate(date: any): string {
    let now: any = new Date();

    let diff: any = now - date;
    let diffSeconds: number = Math.round(diff / 1000);

    if (diffSeconds < 1) {
        return "прямо сейчас";
    } else if (diffSeconds < 60) {
        return diffSeconds + " сек. назад";
    } else if (diffSeconds < 3600) {
        return diffSeconds/60 + " мин. назад";
    } else {
        return date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    }
}

let today: any = new Date();
// console.log( formatDate(new Date(today - 1)) );
// console.log( formatDate(new Date(today - 30 * 1000)) ); 
// console.log( formatDate(new Date(today - 5 * 60 * 1000)) );
// console.log( formatDate(new Date(today - 86400 * 1000)) );

//Преобразуйте объект в JSON, а затем обратно в обычный объект
let user3 = {
    name: "Василий Иванович",
    age: 35
};

let userDecode = JSON.parse(JSON.stringify(user3));
//console.log(userDecode);

//Исключить обратные ссылки
let room = {
    number: 23,
    occupiedBy: null
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room,
    self: null
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key: any, value: any) {
    for (const [objKey, objValue] of Object.entries(value)) {
        if (objKey != "" && objValue == meetup) {
            return undefined;  
        } else {
            return objValue;
        }
    }  
}));
