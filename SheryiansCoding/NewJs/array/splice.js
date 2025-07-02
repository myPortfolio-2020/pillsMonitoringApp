// Splice - Yes, the splice() method does modify the original array in JavaScript.
// array.splice(start, deleteCount, item1, item2, ...)
// Returns an array of removed elements
let spliceMe = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let spliced = spliceMe.splice(2, 4);

console.log(spliceMe); // [ 1, 2, 7, 8, 9 ]
console.log(spliced); // [ 3, 4, 5, 6 ]


//Exercise 1: Remove an Element
//Remove 'blue' from the array using splice().

let colors = ['red', 'green', 'blue', 'yellow'];

