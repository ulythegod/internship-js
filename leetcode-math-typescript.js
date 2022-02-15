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
    let logRes = Math.log(n) / Math.log(3);
    let epsilon = 10;
    result = (logRes + epsilon) % 1 <= 2 * epsilon;
    return result;
}
;
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));
