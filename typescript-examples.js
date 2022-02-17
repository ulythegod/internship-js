var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Foo_count;
import { pi as π } from "./typescript-math-module.js";
import { absolute } from "./typescript-math-module.js";
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
function doSomething1(obj) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    // But we can't re-assign it.
    //obj.prop = "hello";
}
let obj4 = { prop: "test" };
doSomething1(obj4);
//Index Signatures
function getStringArray() {
    let arr;
    arr = ["ghdhgf", "eruieu", "ewer", "weiruteiut"];
    return arr;
}
;
const myArray = getStringArray();
const secondItem = myArray[1];
//const secondItem: string
console.log(myArray);
console.log(secondItem);
class Dogs {
}
let animal = new Dogs();
const okay = {
    "str": animal
};
console.log(okay);
//Tuple Types
function doSomething2(pair) {
    const a = pair[0];
    //    ^?
    const b = pair[1];
    //    ^?
    console.log(pair);
}
doSomething2(["hello", 42]);
//Generics
function identity(arg) {
    return arg;
}
let output = identity("myString");
// console.log(output);
//static Blocks in Classes
function loadLastInstances() {
    let res = [];
    res[0] = new Foo();
    res[1] = new Foo();
    res[2] = new Foo();
    res[3] = new Foo();
    return res;
}
// ---cut---
class Foo {
    get count() {
        return __classPrivateFieldGet(Foo, _a, "f", _Foo_count);
    }
}
_a = Foo;
_Foo_count = { value: 0 };
(() => {
    var _b;
    try {
        const lastInstances = loadLastInstances();
        __classPrivateFieldSet(_b = Foo, _a, __classPrivateFieldGet(_b, _a, "f", _Foo_count) + lastInstances.length, "f", _Foo_count);
    }
    catch (_c) { }
})();
let foo1 = new Foo();
console.log(foo1.count);
//Generic Classes
class Box {
    constructor(value) {
        this.contents = value;
    }
}
const bHello = new Box("hello!");
const b2 = new Box(2);
console.log(bHello);
console.log(b2);
//this parameters
class MyClass {
    constructor() {
        this.name = "MyClass";
    }
    getName() {
        return this.name;
    }
}
const c = new MyClass();
// OK
console.log(c.getName());
// Error, would crash
// const g = c.getName;
// console.log(g());
//Parameter Properties
class Params {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // No body necessary
    }
}
const a1 = new Params(1, 2, 3);
console.log(a1.x);
console.log(a1);
//console.log(a.z);
//abstract Classes and Members
class Base {
    printName() {
        console.log("Hello, " + this.getName());
    }
}
class UnderBase extends Base {
    constructor() {
        super(...arguments);
        this.name = "Alice";
    }
    getName() {
        return this.name;
    }
}
const b3 = new UnderBase();
b3.printName();
//modules
console.log(π);
console.log(absolute(12));
