//Call signatures
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

//Construct signatures
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

//Generic Functions
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

let numbersArr: number[] = [1, 2, 3, 4];

console.log(firstElement(numbersArr));

let strs: string[] = ["bbb", "sss", "wee"];

console.log(firstElement(strs));

//Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
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

//Overload Signatures and the Implementation Signature
function fn1(x: boolean): void;
// Argument type isn't right
function fn1(x: string): void;
function fn1(x: boolean | string) {
    console.log(x);
}

fn1(false);
fn1("fgfgdf");

function fn2(x: string): string;
// Return type isn't right
function fn2(x: number): boolean;
function fn2(x: string | number): string | boolean {
  return "oops";
}

console.log(fn2("sdfsdfs"));
console.log(fn2(4));

//readonly Properties
interface SomeType {
  readonly prop: string;
}

function doSomething1(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  //obj.prop = "hello";
}

let obj: SomeType = {prop: "test"};
doSomething1(obj);

//Index Signatures
function getStringArray(): StringArray {
  let arr: StringArray;

  arr = ["ghdhgf", "eruieu", "ewer", "weiruteiut"];

  return arr;
};
// ---cut---
interface StringArray {
  [index: number]: string;//index signature
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
//const secondItem: string

console.log(myArray);
console.log(secondItem);

interface Animal {
  name: string;
}
 
interface Dog extends Animal {
  breed: string;
}
 
// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface Animal {
  name: string;
}
 
interface Dog extends Animal {
  breed: string;
}
 
// Error: indexing with a numeric string might get you a completely separate type of Animal!
// interface NotOkay {
//   [x: number]: Animal; //'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.
//   [x: string]: Dog;
// }

//Объяснение
//смотри у тебя такой объект
// const a = {
//   42: new Cat(),
//   '43': new Dog(),
// }
// т.к названия свойств объекта хранятся как строки, ты получишь такой объект
// const a = {
//   '42': new Cat(),
//   '43': new Dog(),
// }
// при обращении к свойству, js приведет ключ, который ты используешь к строке
// и ты можешь получать свойства по числу или строке, разницы нет
// a['42'] instanceof Cat // true
// a[42] instanceof Cat // true
// Но ты указываешь тип NotOkay как объект у которого во всех свойствах типа 
//строка находится объект класса собака, что не соответствует тому, что там может быть

interface Okay {
  [x: string]: Animal;
}

class Dogs implements Dog {
  name: string;
  breed: string;
}

let animal = new Dogs();

const okay: Okay = {
  "str": animal
}

console.log(okay);

//Tuple Types
function doSomething2(pair: [string, number]) {
  const a = pair[0];
  //    ^?
  const b = pair[1];
  //    ^?
  console.log(pair)
}

doSomething2(["hello", 42]);

//Generics
function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("myString");

// console.log(output);


