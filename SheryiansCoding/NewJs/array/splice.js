// Splice - Yes, the splice() method does modify the original array in JavaScript.
// array.splice(start, deleteCount, item1, item2, ...)
// Returns an array of removed elements
let spliceMe = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let spliced = spliceMe.splice(2, 4);

console.log(spliceMe); // [ 1, 2, 7, 8, 9 ]
console.log(spliced); // [ 3, 4, 5, 6 ]

//Exercise 1: Remove an Element
//Remove 'blue' from the array using splice().

let colors = ["red", "green", "blue", "yellow"];
let spliceColor = colors.splice(2, 1);

console.log(colors); // ['red', 'green', 'yellow']
console.log(spliceColor); // ['blue']

// Exercise 2: Insert Elements
// Insert 3 and 4 between 2 and 5 using splice().

let numbers = [1, 2, 5, 6];
let spliceNumbers = numbers.splice()

console.log();
console.log();
