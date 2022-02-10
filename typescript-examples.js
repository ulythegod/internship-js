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
