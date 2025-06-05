// if push array into an another array [array1,[array2] ]

const pushArr1 = [1, 2, 3, 4, 5, 6];
const pushArr2 = [6, 7, 8, 9, 10];

const pushBoth = pushArr1.push(pushArr2); // res: number of elements in both array

console.log(pushBoth); // 7
console.log("pushArr1:", pushArr1); // arrVal1: [ 1, 2, 3, 4, 5, 6, [ 6, 7, 8, 9, 10 ] ]

// concat  // no change in original array
const concatArr1 = [1, 2, 3, 4, 5];
const concatArr2 = [6, 7, 8, 9, 10];

const concatBoth = concatArr1.concat(concatArr2);
console.log(concatBoth); // [  1, 2, 3, 4,  5,  6, 7, 8, 9, 10 ]
console.log(concatArr1); // [ 1, 2, 3, 4, 5 ]

// spreadOperator
const arrSpread1 = [1, 2, 3, 4, 5];
const arrSpread2 = [6, 7, 8, 9, 10];

const spreadOpt = [...arrSpread1, ...arrSpread2];
console.log(spreadOpt); // [  1, 2, 3, 4,  5,  6, 7, 8, 9, 10]

const arr = [1, 2, 3, 4, 5];
console.log(arr);

const arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1);

const arr3 = arr.push(14);
console.log(arr3); // 6
console.log("now arr:", arr);

const arr4 = [...arr, 7];
console.log(arr4); // [1,2,3,4,5,14,7]

const boxA = ["a", "b", "C"];
const boxB = ["d", "e", "f"];

const box1 = boxA.concat(boxB);
console.log(box1); // [ 'a', 'b', 'C', 'd', 'e', 'f' ]

const box2 = [...boxA, ...boxB];
console.log(box2); // [ 'a', 'b', 'C', 'd', 'e', 'f' ]

// slice - no chane in original array

const sliSpi = [1, 2, 3, 4, 5, 6];
const sli = sliSpi.slice(1, 3); //slice from index to index(but not including to index)

console.log(sli); // [2, 3]
console.log(sliSpi); // [1,2,3,4,5,6]

// splice - change in original array - splice(start, deleteCount)
const spliceNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const spliceMe = spliceNum.splice(3, 7);
// start = 3,
// deleteCount = 7: This is the number of elements to remove, starting at index 3
console.log(spliceMe); // [4, 5, 6, 7, 8, 9,10 ]
console.log(spliceNum); // [1,2,3,11,12]

// isArray
const isArray01 = Array.isArray("Rabab");
console.log(isArray01); // false

// Array.from
console.log(Array.from("RABAB")); // [ 'R', 'A', 'B', 'A', 'B' ]
console.log(Array.from({ name: "Rabab" })); // []

// ArrayOff

const v1 = "kim";
const v2 = "jim";
const v3 = "Tim";
console.log(Array.of(v1, v2, v3)); //[ 'kim', 'jim', 'Tim' ]
