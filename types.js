//Можно ли добавить свойство строке?
let str = "Привет";
// str.test = 5;//property test does not exists on type string
// alert(str.test);
//Сумма пользовательских чисел
function sumNumbers() {
    let first = Number(prompt("first", "0"));
    let second = Number(prompt("first", "0"));
    console.log(first + second);
}
//sumNumbers();
//Ввод числового значения
function readNumber() {
    let input = +prompt("input number", "");
    while (!isFinite(input)) {
        input = +prompt("input number", "");
    }
    if (input == null || input == "") {
        return null;
    }
    else {
        return input;
    }
}
//console.log(readNumber());
//Случайное число от min до max
function random(min, max) {
    let result = Math.floor(min + (Math.random() * (max - min)));
    return result;
}
// console.log( random(1, 10) );
// console.log( random(1, 5) );
// console.log( random(1, 5) );
//Сделать первый символ заглавным
function ucFirst(str) {
    let strArray = str.split("");
    return strArray.map((val, index) => {
        if (index == 0) {
            return val.toUpperCase();
        }
        else {
            return val;
        }
    }).join("");
}
//console.log(ucFirst("вася"));
//Проверка на спам
function checkSpam(str) {
    let isSpam = false;
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
function truncate(str, maxlength) {
    let result = "";
    if (str.length > maxlength) {
        let strArray = str.split("");
        console.log(strArray);
        let deletedAmount = str.length - maxlength;
        strArray.splice(maxlength - 1, deletedAmount + 1);
        strArray.push("...");
        console.log(strArray);
        result = strArray.join("");
    }
    else {
        result = str;
    }
    return result;
}
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));
//Выделить число
function extractCurrencyValue(str) {
    let strArray = str.split("");
    for (let i = 0; i < strArray.length; i++) {
        if (isNaN(Number(strArray[i]))) {
            strArray.splice(i, 1);
        }
    }
    return Number(strArray.join(""));
}
//console.log(extractCurrencyValue("$120"));
//Фильтрация уникальных элементов массива
function unique(arr) {
    let setOfValues = new Set();
    for (let i = 0; i < arr.length; i++) {
        setOfValues.add(arr[i]);
    }
    return setOfValues;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
//console.log( unique(values) );
function aclean(arr) {
    let result = [];
    let setOfUniqueValues = new Set();
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        setOfUniqueValues.add(sorted);
    }
    return Array.from(setOfUniqueValues);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));
