function abc() {
  console.log("hi");
}
abc(); // abc is the referance and () is the execution

const addNum = (a, b) => {
  return a + b;
};
// a,b parameters
// 4,4 arguments

const resultReturn = addNum(4, 4);
console.log("resultReturn", resultReturn);

const addNum2 = (a, b) => {
  console.log(a + b);
};
const resultNoReturn = addNum2(2, 3);

console.log("resultNoReturn", resultNoReturn); // undefined

function xyz(userNm) {
  return `${userNm} is just logged in`;
}

console.log(xyz("rabab")); // rabab is just logged in

// if giving no argument then undefined
console.log(xyz()); // undefined is just logged in

function funFn(userName) {
  if (!userName) {
    console.log("Please give userName");
    return;
  }
  return `${userName} is now available`;
}

console.log(funFn("kashif")); // kashif is now available
console.log(funFn()); // Please give userName
