// singleton - object created with constructor are called singleton (later chapters)
// Object.create() - this is called as through constructor method

// literal

const objLiteral = {
  nm: "Rabab",
  class: 11,
}; // Literal Object

console.log(objLiteral.nm); // Rabab

// object literal wrapped with new Object(...)
const objSingleton = new Object({ nm: "john", age: 10 });
console.log(objSingleton.nm); // john

const obj3 = {
  nm: "Rabab",
  empNm: "7A",
  "course Id": 5,
  isLogin: true,
  days: ["Monday", "Tuesday"],
  print: () => {
    console.log("Free course");
  },
};

// ways to access object Value
console.log(obj3.empNm); // 7A
console.log(obj3["days"]); // [ 'Monday', 'Tuesday' ]
// console.log(obj3.course Id); // give error so
console.log(obj3["course Id"]); // 5

//so

// if you can't access as obj4.full name so

const obj4 = {
  "full name": "Rabab Zehra", // see the space b/w full name
};
console.log(obj4["full name"]); // Rabab Zehra

const symb1 = Symbol("key123");
const symb2 = Symbol("key123");

console.log(symb1 == symb2); // false

// Symbols in Object

const symbol1 = Symbol();

const symbol2 = Symbol("symbolOne");
// mySymbol is a unique and immutable primitive value.
// "myDescription" is a description used only for debugging purposes (like when you print the symbol).
// The description does not affect the uniqueness of the symbol.

const obj5 = {
  nm: "Rahat",
  [symbol1]: "keyOneIsActuallyASymbol",
};

console.log(obj5[symbol1]); // keyOne001
console.log(symbol2); // Symbol(symbolOne)
console.log(symbol1 == symbol2); // false

const a = Symbol("test");
const b = Symbol("test");

console.log(a === b); // false, because each Symbol is unique
console.log(a.description); // "test"

// Object.freeze

const frezObj = {
  nm: "Akash",
  sal: 5000,
};

Object.freeze(frezObj);

frezObj.nm = "Akash M"; // no changes occure because of Object.freeze(frezObj);
frezObj.sal = 10000;
console.log(frezObj.nm + frezObj.sal); // Akash5000

const newObj = {
  nm: "Jackson",
};

newObj.jackFn = () => {
  console.log("hello fn");
  // return "hi"  // if you give return here you will see hi not undefined
};
newObj.cost = "high";

console.log("jackFn", newObj.jackFn); // [Function (anonymous)]
console.log("jackFn()", newObj.jackFn()); // jackFn() undefined

// console.log("jackFn", newObj.jackFn); → Just logs the function definition.
// console.log("jackFn()", newObj.jackFn()); → Calls the function (which logs "hello fn" internally),
//  and then logs jackFn() undefined because the function returns undefined.

// -------------------------------------------------
// This
// -------------------------------------------------

newObj.funTwo = () => {
  console.log(`hello user, ${this.nm}`);
  // return `${this.nm}`;
  //return `${newObj.nm}`;
};

console.log("funTwo:", newObj.funTwo()); // funTwo:Jackson
