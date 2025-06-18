let x = [1, 2, 3, 4, 5];
let y = [6, 7, 8, 9, 10];

x.push(y);
let ifPush = x.push(y);
console.log(ifPush); // 7

console.log("x: ", x); // x:  [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ], [ 6, 7, 8, 9, 10 ] ]
console.log("y: ", y); // y:  [ 6, 7, 8, 9, 10 ]
