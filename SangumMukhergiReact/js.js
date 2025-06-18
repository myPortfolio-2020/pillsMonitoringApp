//&& AND - || OR - Operators

let a = true; // check first value
let b = true; // then second
// first was true so go to next
console.log(a && b); //true

let c = true; // first is true so go to next
let d = false;
console.log(c && d); // false

let e = false; // first is false so do not go farther
let f = true;
console.log(e && f); // false

let g = false;
let h = false;
console.log(g && h); // false
