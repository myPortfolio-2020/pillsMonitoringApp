// dataTypes ECMA standards
// "use Strict" treat all js code as a newer version
// in modern js all code runs as strict mode

const myNm = "rabab";

// alert(myNm);
// window.alert("myNm");
// gives error why we are in node
// works in browser console

// data types

// Primitives

// number
// string
// boolean
// bigInt
// any
// null - standalone value
// defined - value is not assigned
// symbol - or unique

let nm = "rabab";
let days = 45;
let shopping = true;
let bigIn = 111111111111111n;
let valNull = null;
let notDeined = undefined;

console.table([nm, days, shopping, bigIn, valNull, notDeined]);

console.table([
  typeof nm,
  typeof days,
  typeof shopping,
  typeof bigIn,
  typeof valNull,
  typeof notDeined,
]);

// object

console.log(typeof undefined); // undefined -type - undeined
console.log(typeof null); // null - type - object
console.log(typeof []); // [] - type - object
console.log(typeof {}); // {} - type - object
