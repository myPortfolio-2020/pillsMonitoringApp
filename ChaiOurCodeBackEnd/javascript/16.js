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

const symbol1 = Symbol("keyOne");

const obj5 = {
  nm: "Rahat",
  symbol1: symbol1,
};

console.log(obj5.symbol1);
