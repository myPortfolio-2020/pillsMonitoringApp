// every - condition will apply on all

let arr = [40, 50, 60, 70, 80];
const ifEvery = arr.every((val) => {
  if (val >= 39) {
    return val;
  }
});

console.log(ifEvery); // true
// if

const ifEvery02 = arr.every((val) => {
  if (val > 60) {
    return val;
  }
});

console.log(ifEvery02); // false - why, because every item is not greater than 60 in that array
