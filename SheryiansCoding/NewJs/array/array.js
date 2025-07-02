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
