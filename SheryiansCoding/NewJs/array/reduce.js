// reduce

let num = [100, 200, 300, 400, 500];

const reduceNum = num.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log(reduceNum);

//example 2

const numSet2 = [10, 20, 30, 40, 50];

let reduceNumSet2 = numSet2.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(reduceNumSet2);
