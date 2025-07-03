// spread operator

// why do we need them

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;

console.log(arr1); // [ 1, 2, 3, 4, 5 ]
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// now you have pushed 6 in arr1 but arr2 also changed

arr1.push(6);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]

// so spread operators intruduced

let array1 = [1, 2, 3, 4, 5];
let array2 = [...array1];

console.log(array1); // [ 1, 2, 3, 4, 5 ]
console.log(array2); // [ 1, 2, 3, 4, 5 ]

array1.push(6, 7, 8);

console.log(array1); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(array2); // [ 1, 2, 3, 4, 5 ] - no change in array1
