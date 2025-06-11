var varVal = 100;
let letVal = 200;
const constVal = 300;

const outSide = () => {
  let x = 100;
  function inSide() {
    let y = 300;
    console.log("insideFN: x,y: ", x, y);
  }
  console.log("inside outsideFn, and outside InsideFun", x); // first execute this line
  // console.log(y)    // NOT RUN OUSIDE THE BLOCK
  inSide();
};

outSide();

// output
// 100
// 100 300

if (true) {
  let userName = "rabab";

  if (userName === "rabab") {
    let website = " youtube";
    console.log(userName + website);
  }
  // console.log(website) error - due to outside the scope
}

// console.log(userName) // error

// output
// rabab youtube

/// ++++++++++ declarations positions ++++++++

// it will execute even execute before declaration
console.log(addFn1(5)); // 6

function addFn1(num) {
  return num + 1;
}
// console.log(addFn1(5)) // 6


// console.log(addFn2(5)); // error - why above declaration
// error will occure if you try to exceute before declaraion
// addFn2 is a function and addFn2 is called as expression

const addFn2 = function (num) {
  return num + 1;
};

// console.log(addFn2(5)); // 6
