// let a = 5;
// let b = a++;
// console.log("a:", a, "b:",b);
// // console.log("a:"6, "b:"5);


let a = 5;
let b = ++a;
console.log("a:", a, "b:",b);
// console.log("a:"6, "b:"6);


let x = 3;
let y = x++ + ++x;
console.log("x:", x, "y:",y);
// "x:", 5, "y:",8

let m = 7;
let n = m++ + m++ + ++m;
console.log("m:", m, "n:",n);
// console.log("m:", 10, "n:",25);


let p = 1;
let q = p++ + ++p + p++ + p + ++p;
// console.log("p:", p, "q:",q);
// console.log("p:", p, "q:",q);


let i = 10;
let j = 20;
let k = i++ + ++j + j++ + ++i;
// console.log('i:', i, "j:",j , 'k:',k);
// console.log('i:', i, "j:",j , 'k:',k);

