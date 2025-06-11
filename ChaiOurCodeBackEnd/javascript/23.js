const user = {
  userName: "Tim",
  comp: "remote",
  fn: function () {
    console.log(this.userName); // we use THIS keyword when we use current context
    console.log("this inside fn:", this); // { userName: 'Kim', comp: 'remote', fn: [Function: fn] }
  },
};
user.userName = "Kim";
console.log(user.fn());

console.log(this); // {} in node console
// this - in browser console - window fn

function chai() {
  console.log(this);
}
chai();

function doesThisWorksInFunction() {
  let user = "Jim";
  console.log(this.user);
}
doesThisWorksInFunction(); // undefined - why, THIS works with object context
