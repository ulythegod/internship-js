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

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arr) );
