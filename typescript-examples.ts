//call signatures
type DescribableFunction = {
    description: string,
    (someArg: number): boolean
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));    
}

const myFn = (someArg: number) => {
    return someArg > 5;
}
myFn.description = "function desc";

doSomething(myFn);

//construct signatures
type SomeObject = any;

type SomeConstructor = {
    new (s: string): SomeObject;
}

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

class SomeCC {
    str: string
    constructor(s: string) {
        this.str = s;
    }
}

const cc: SomeConstructor = SomeCC;
console.log(fn(cc));
