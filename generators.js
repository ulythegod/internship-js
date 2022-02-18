//Псевдослучайный генератор
function* pseudoRandom(seed) {
    let result = seed;
    while (true) {
        result = result * 16807 % 2147483647;
        yield result;
    }
}
let generator = pseudoRandom(1);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
