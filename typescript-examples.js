function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
const myFn = (someArg) => {
    return someArg > 5;
};
myFn.description = "function desc";
doSomething(myFn);
function fn(ctor) {
    return new ctor("hello");
}
class SomeCC {
    constructor(s) {
        this.str = s;
    }
}
const cc = SomeCC;
console.log(fn(cc));
//Generic Functions
function firstElement(arr) {
    return arr[0];
}
let numbersArr = [1, 2, 3, 4];
console.log(firstElement(numbersArr));
let strs = ["bbb", "sss", "wee"];
console.log(firstElement(strs));
//Constraints
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
console.log(longerArray);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
console.log(longerString);
// Error! Numbers don't have a 'length' property
const notOK = longest([10], [100]);
console.log(notOK);
function fn1(x) {
    console.log(x);
}
fn1(false);
fn1("fgfgdf");
function fn2(x) {
    return "oops";
}
console.log(fn2("sdfsdfs"));
console.log(fn2(4));
