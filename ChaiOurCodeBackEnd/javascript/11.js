let country1 = "Pakistan";
let country2 = "USA";

console.log(`i am leaving ${country1.toUpperCase()} for ${country2}`);

// defining string in two ways

let str0 = "rabab";
console.log(str0); // rabab
console.log(str0[1]);

let str1 = new String("Rabab");
console.log(str1); // [String: 'Rabab']

// String {'Rabab'}
// 0: "R"
// 1: "a"
// 2: "b"
// 3: "a"
// 4: "b"
// length: 5
console.log(str1[1]);

console.log(str0.__proto__); // {}
console.log(str1.__proto__); // {}

console.log(str0.charAt(4)); // b

console.log(str0.toUpperCase()) // RABAB
// but 
console.log(str0) // rabab - see original voalue is not changed (stack - create copy)