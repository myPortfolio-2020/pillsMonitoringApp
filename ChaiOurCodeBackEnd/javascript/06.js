// Datatype conversion confusion

let score1 = Number(44);
let sum1 = score1 + 1;
console.table([score1, typeof score1, sum1, typeof sum1]); // 44 - number - 45 - number

let score2 = Number("44");
let sum2 = score2 + 1;
console.table([score2, typeof score2, sum2, typeof sum2]); // 44 - number - 45 - number

let score3 = Number("44a");
let sum3 = score3 + 1;
console.table([score3, typeof score3, sum3, typeof sum3]); // NaN - number - NaN - number

let score4 = Number(null); // 0
let sum4 = score4 + 1;
console.table([score4, typeof score4, sum4, typeof sum4]); // 0 - number - 1 - number

let isLogin = Boolean(0);
console.log(isLogin); // false

let emptyVar = "";
let ifBool = Boolean(emptyVar);
console.log(ifBool); // false

let emptyVar1 = " ";
let ifBool1 = Boolean(emptyVar1);
console.log(ifBool1); // true
