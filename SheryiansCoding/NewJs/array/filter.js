// filter
const array1 = [1, 22, 3, 44, 23, 14, 100];

const filterItem = array1.filter((item) => {
  item = item >= 20;
  return item;
});

console.log(array1); // [1, 22,   3, 44,  23, 14, 100]
console.log(filterItem); // [ 22, 44, 23, 100 ]

let array2 = [23, 43, 55, 57, 11, 28, 66];

let fiterItem2 = array2.filter((item) => {
  if (item >= 50) {
    return true;
  }
});

console.log(array2); // [23, 43, 55, 57,  11, 28, 66]
console.log(fiterItem2); // [ 55, 57, 66 ]
