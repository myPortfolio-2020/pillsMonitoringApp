// ARRAY

// How do you declare an empty array in JavaScript?

const emptyArray1 = [];
const emptyArray2 = new Array();

console.log(emptyArray1);
console.log(emptyArray2);

// Given an array const fruits = ["apple", "banana", "cherry"];, how would you access the element "banana"?

const fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // banana

// How do you add a new element "grape" to the end of the fruits array?

// method1
const fruitAdded = fruits.push("grapes");
console.log(fruitAdded); // 4
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'grapes' ]

// method2
const fruits02 = ["apple", "banana", "cherry"];
const fruitAdded02 = [...fruits02, "grapes"];
console.log(fruitAdded02); // [ 'apple', 'banana', 'cherry', 'grapes' ]

// method3  - But unshift will add in the begininng
const fruits03 = ["apple", "banana", "cherry"];
const fruitAdded03 = fruits03.unshift("grapes");
console.log(fruitAdded03, fruits03); // 4 [ 'grapes', 'apple', 'banana', 'cherry' ]

// How do you remove the last element from the fruits array?
const fruits04 = ["apple", "banana", "cherry"];
fruits04.pop();
console.log(fruits04); // [ 'apple', 'banana' ]

// What is the length property of an array used for?
const fruitBasketLength = fruits.length;
console.log(fruitBasketLength); // 4
// length property is used to calculate the number of elements in any array

// OBJECTS
// How do you declare an empty object in JavaScript?

const obj1 = {};
const obj2 = new Object();
console.log(obj1, obj2); // {} {}

// Given an object const person = { name: "Alice", age: 30 };, how would you access the value of the name property? (Provide two ways if you know them!)

const person = { name: "Alice", age: 30 };
console.log(person.name); // Alice
console.log(person["name"]); // Alice

// How do you add a new property city with the value "New York" to the person object?
const personModified01 = { name: "Alice", age: 30, city: "New York" };
console.log(personModified01); // { name: 'Alice', age: 30, city: 'New York' }

// ---------------Gemini Correction -----------
// person.city = "New York"; // Using dot notation
// OR
// person["occupation"] = "Engineer"; // Using bracket notation
// ---------------Gemini Correction -----------

// dynamically
const personModified02 = { name: "Alice", age: 30 };

const enhanceArrayFunction = (addObj, ele) => {
  return { ...addObj, ...ele };
};

console.log(enhanceArrayFunction(personModified02, { city: "New York" })); // { name: 'Alice', age: 30, city: 'New York' }

// How do you remove the age property from the person object?
const person02 = { name: "Alice", age: 30 };
// Not done
delete person02.age;
console.log(person02); // { name: 'Alice' }

// What is the main difference between an array and an object in JavaScript in terms of how they store data?


// Solution:
//Arrays:
//  Store ordered collections of data. Elements are accessed by their numerical index (starting from 0). They are best when the order of elements matters, or when you have a list of similar items.


// Objects:
//  Store unordered collections of data as key-value pairs. Properties are accessed by their string (or symbol) keys. They are best when you want to store structured data where each piece of data has a meaningful name (e.g., a person's name, age, city).