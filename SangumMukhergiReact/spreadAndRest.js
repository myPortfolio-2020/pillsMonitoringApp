let x = [1, 2, 3, 4, 5];
let y = [6, 7, 8, 9, 10];

x.push(y); // 6 element
let ifPush = x.push(y);
console.log(ifPush); // 7 elements

console.log("x: ", x); // x:  [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ], [ 6, 7, 8, 9, 10 ] ]
console.log("y: ", y); // y:  [ 6, 7, 8, 9, 10 ]

// rest and spread
let x2 = [1, 2, 3, 4, 5];
let y2 = [6, 7, 8, 9, 10];

console.log([...x2, ...y2]); // [  1, 2, 3, 4,  5,  6, 7, 8, 9, 10]
console.log("x2:", x2); // x2: [ 1, 2, 3, 4, 5 ]
console.log("y2:", y2); // y2: [ 6, 7, 8, 9, 10 ]

/* REST OPERATORS */
const restFn01 = () => {
  return "NO PARAMETER";
};
console.log(restFn01(2, 4, 4, 5)); // NO PARAMETER

const restFn02 = (...arg) => {
  return arg;
};
console.log(restFn02(2, 4, 4, 5)); // [ 2, 4, 4, 5 ]

let restFn4 = (a, b, ...c) => {
  // console.log(a,b,c)
  return [a, b, c];
};
console.log(restFn4(1, 2, 45, 56, 87, 45, 11)); // [ 1, 2, [ 45, 56, 87, 45, 11 ] ]
