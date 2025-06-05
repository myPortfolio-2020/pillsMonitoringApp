// how to keep and access data in memory, two types of data
// primitive - call by value
// number
// string
// boolean
// null(empty rember temperater example)
// any
// undefined
// symbol  (to make something unique)
// bigInt

// non primitive - refenence type

// array
// object
// functions

// is js a dynamic type or static type language?
// Yes, JavaScript is a dynamic, loosely typed language

// Symbol
// -----------------------------------------------

let id = Symbol("123");
let anotherId = Symbol("123");
console.log(id === anotherId); // false

let dataType1 = undefined;
console.log(typeof dataType1); // undefined

let dataType2 = null;
console.log(typeof dataType2); // object

let dataType3 = [1, 2, 3, 4];
console.log(typeof dataType3); // object

let dataType4 = {
  nm: "Joe",
  age: 22,
};
console.log(typeof dataType4); // object

let symbolType = Symbol("12345");
console.log(typeof symbolType); // symbol

let bigIntType = 123654789n;
console.log(typeof bigIntType); // bigint
