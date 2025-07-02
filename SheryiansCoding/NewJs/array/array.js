// array
// push gives length
// pop return the poped item

// push
//No, the .push() method does not return a new array in JavaScript. It modifies the original array in place and returns the new length of the array.
let walnut = [1, 2, 3, 4, 5];
let walnutPush = walnut.push(6);

console.log(walnut); // [ 1, 2, 3, 4, 5, 6 ]
console.log(walnutPush); // 6 (total 6 elements)

//Pop
let almond = [11, 12, 13, 14, 15];
let almondPop = almond.pop();

console.log(almond); // [11,12,13,14]
console.log(almondPop); // 15 (return last item,  15 was poped )

// shift - works like pop but start from 0 index
let ele = [100, 200, 300, 400, 500];
const shiftEle = ele.shift();

console.log(ele); // [ 200, 300, 400, 500 ]
console.log(shiftEle); // 100

// unShift - works like push but start from 0 index -
// it is called unshift because it place the element in the begining of an array and shift the position of the other elements
let unShiftEle = ["a", "b", "c", "d", "e"];
let eleUnshift = unShiftEle.unshift("a+", "b+");

console.log(unShiftEle); // ["a+",'b+',"a","b","c","d","e"]
console.log(eleUnshift); // 6

// difference between slice and splice

// slice return you a new array, does not modify - usage - Copy a portion
// splice modify exisitng array - usage - Add/remove/replace elements

//slice
let num = [1, 2, 3, 4, 5, 6, 7, 8];
let numSlice = num.slice(2, 4);
console.log(num); // no modification in real array
console.log(numSlice); // [ 3, 4 ]

//Reverse Method
let reverse = [1, 2, 3, 4, 5];
reverse.reverse();
console.log(reverse); //[ 5, 4, 3, 2, 1 ]

//sort
let sortMethodAssending = [11, 221, 32, 4, 5];
sortMethodAssending.sort((a, b) => {
  return a - b;
});
console.log(sortMethodAssending); // [ 4, 5, 11, 32, 221 ]

let sortMethodDecending = [11, 221, 32, 4, 5];
sortMethodDecending.sort((a, b) => {
  return b - a;
});
console.log(sortMethodDecending); //[ 221, 32, 11, 5, 4 ]
