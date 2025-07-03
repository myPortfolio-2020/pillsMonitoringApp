// find - first value

let array = [1, 2, 3, 4, 5, 1];

const findArr = array.find((val) => {
  if (val === 1) {
    return val;
  }
});

console.log(array);
console.log(findArr); // 1
