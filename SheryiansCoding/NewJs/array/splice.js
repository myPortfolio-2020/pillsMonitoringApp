// Splice - Yes, the splice() method does modify the original array in JavaScript.
// array.splice(start, deleteCount, item1, item2, ...)
// modified an array
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
let spliceNumbers = numbers.splice(2, 0, 3, 4);

console.log(numbers); // [1, 2,3,4, 5, 6];
console.log(spliceNumbers);

//Exercise 3: Replace Elements
// Replace 'banana' with 'kiwi' using splice().

let fruits = ["apple", "banana", "cherry"];
let fruitSplice = fruits.splice(1, 1, "kiwi");
console.log(fruits); // [ 'apple', 'kiwi', 'cherry' ]
console.log(fruitSplice); // [ 'banana' ]

//Exercise 4: Remove Multiple Elements
// Remove 'b', 'c', and 'd' using splice().

let letters = ["a", "b", "c", "d", "e"];

let letterSplice = letters.splice(1, 3);

console.log(letters); // [ 'a', 'e' ]
console.log(letterSplice)// ["b", "c", "d"];

// Exercise 5: Empty the Array
// Use splice() to remove all elements from the array.

let items = ["x", "y", "z"];
let itemSplice = items.splice(0,3);

console.log(items); // []
console.log(itemSplice); // [ 'x', 'y', 'z' ]

// ex6: Remove 2 elements starting from index 2.


let fruitBasket = ["apple", "banana", "cherry", "date", "fig", "grape"];