// you can not say as ans === NaN
// NaN === NaN - false
// let ans = Number(prompt("what is your age?"));

// if (isNaN(ans)) {
//   console.log("enter number not string");
// } else if (ans >= 18) {
//   console.log("you are on right place");
// } else {
//   console.log("wait for some years");
// }

let num = 0.1 + 0.2;
// 1.0+0.2 = 0.300000000000000004
// Number(num.toFixed(1) to elimented 0.300000000000000004 to get 0.3
switch (Number(num.toFixed(1))) {
  case 0.3:
    console.log("hello");
    break;
  case 0.5:
    console.log("hey");
    break;
  default:
    console.log("default");
}
