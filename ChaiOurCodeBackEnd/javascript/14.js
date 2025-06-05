// shallow and deep copy  - see other video

const arr1 = [1, 2, 3, 4, 5]; // syntax type: literal

const arr2 = new Array(1, 2, 3, 4, 5); // syntax type: constructor

arr1.push(10);
arr2.push(10);
console.log(arr1); // [ 1, 2, 3, 4, 5, 10 ] push add in last
console.log(arr2); // [ 1, 2, 3, 4, 5, 10 ]

arr1.pop();
console.log(arr1); // [ 1, 2, 3, 4, 5 ] - delete from last

arr1.unshift(0); // add 0 at first place in array
console.log(arr1); // [ 0, 1, 2, 3, 4, 5 ]

arr1.shift(); // delete first element
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

// why using unshift is critical
// it adds element at the first place in an array that cause all the elements move forward

console.log(arr1.includes(10)); // false 10 is not in array
console.log(arr1.includes(1)); // true

console.log("arr1:", arr1); // arr1: [ 1, 2, 3, 4, 5 ]

const newArr1 = arr1.join();
console.log("newArr1:", newArr1); // newArr1: 1,2,3,4,5 - no []
// join - output not in an array but string

/*  slice and splice  */
/*-----------------------------------*/

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("arrayOne:", arrayOne);

// slice(1, 3) = slice(index, go to the number of elements)
const arraySlice = arrayOne.slice(1, 3);
console.log("arraySlice:", arraySlice); //arraySlice: [ 2, 3 ]

const arraySplice = arrayOne.splice(1, 3);
console.log("arraySplice:", arraySplice); // arraySplice: [ 2, 3, 4 ]

const alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const alphaSlice = alphaArr.slice(2, 5);
console.log("alphaSlice:", alphaSlice); // ["c","d","e"]
console.log(alphaArr);

const alphaSplice = alphaArr.splice(2, 5);
console.log("alphaSplice:", alphaSplice); // ["c", "d", "e", "f", "g"]
console.log(alphaArr);

// differance between slice and splice
// slice - no change in original array as here alphaArr
// splice - make changes in original array [ 'a', 'b', 'h', 'i' ] remove the whole slice from original array

const alphaSliceNew = alphaArr.slice(1, 3);
console.log(alphaSliceNew); // ['b', 'h'] 
