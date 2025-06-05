console.log(2 > 1); // true
console.log(2 >= 1); // true - 2 is greater than 1 or equal to 1

console.log("2" > 1); // true
console.log("02" > 1); // true
console.log("02a" > 1); // false

// comparisons convert null as a number and treating it as 0
// True for relational comparisons (<, >, <=, >=):
// But
// False for equality comparison (==):

// avoid this type of conversion

console.log(null); // null
console.log(null > 0); // false why relational comparisons
console.log(null == 0); // false why equality comparison
console.log(null >= 0); // true
console.log(null == undefined); // true special case

// in case of undefined all false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// Strict Check === ,
// checks value and data type

console.log("3" === 3); // false
