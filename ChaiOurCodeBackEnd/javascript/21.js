// Global scope
var varV = 100;
let letV = 200;

if (true) {
  var varV = 1;
  let letV = 2;
  const constV = 3;
  console.log(varV, "Var inside"); // 1 var inside
  console.log(letV, "Let inside"); // 2 let inside
}

console.log(varV, "Var outside"); // 1 var outside
console.log(letV, "Let outside"); // 200 let outside
// console.log(constV)

// global scopes are different when
//   1 - you see in browser console
//   2 - you run as node file.js
