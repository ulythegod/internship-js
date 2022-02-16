//Fizz Buzz
function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
;
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
//Count Primes
function countPrimes(n) {
    let result = 0;
    let isPrime = [];
    for (let i = 2; i < n; i++) {
        isPrime[i] = true;
    }
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) {
            continue;
        }
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            result++;
        }
    }
    return result;
}
;
// console.log(countPrimes(10));
// console.log(countPrimes(0));
// console.log(countPrimes(1));
// console.log(countPrimes(120));
//Power of Three
function isPowerOfThree(n) {
    let result = false;
    if (n < 1) {
        return result;
    }
    //let logRes = Math.log(n) / Math.log(3); //O(1)
    while (n % 3 == 0) { //O(n)
        n /= 3;
    }
    result = n === 1;
    return result;
}
;
// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(0));
// console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(45));
//Roman to Integer
function romanToInt(s) {
    let result = 0;
    let mappingNumbers = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let strArr = s.split("");
    strArr.reverse();
    let lastValue = "";
    strArr.forEach((value, index) => {
        console.log("index", index);
        console.log("value", mappingNumbers[value], value);
        console.log("lastValue", mappingNumbers[lastValue], lastValue);
        console.log("result", result);
        if (mappingNumbers[lastValue] > mappingNumbers[value]) {
            result -= mappingNumbers[value];
        }
        else {
            result += mappingNumbers[value];
        }
        lastValue = value;
    });
    return result;
}
;
console.log(romanToInt("MCMXCIV"));
