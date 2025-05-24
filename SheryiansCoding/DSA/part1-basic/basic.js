// ------------------------------------------------------
// primitive value and nonPrimitive values
// ------------------------------------------------------

// primitive value
// When you assign a primitive value to a variable or pass it into a function,
// a copy of the value is made.
let g = 5;
let h = g;
h = 10;
console.log(g); // 5 (original stays unchanged)

// 2. Objects – Passed by Reference
// When you assign an object to a variable or pass it to a function,
//  you're assigning a reference to its location in memory, not the object itself.

let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // "Bob" (because both variables point to the same object)

let a = "13";
let b = 13;
let c = a + b;
// console.log(typeof(c))

console.log("1" + 10 + 20);
console.log(10 + 20 + "1");

console.log(typeof ("1" + 10 + 20));
console.log(typeof (10 + 20 + "1"));

// type coercion
// js engine perform operations according to operators
// + operator become concate when there is string and number
// but operates as operator others as -, *,/

console.log(12 + 2);
console.log("12" + 2);
console.log("12" - 2);
console.log("12" * 2);
console.log("12" / 2);

console.log(typeof (12 + 2));
console.log(typeof ("12" + 2));
console.log(typeof ("12" - 2));
console.log(typeof ("12" * 2));
console.log(typeof ("12" / 2));

console.log("a" + 2);
console.log(typeof ("a" + 2));

// prompt
// let age = prompt("what is your age");
// console.logtypeof(age);
// what ever you type in prompt, it will convert into string

// let check = Number(prompt("what is your name"));
// console.log("this is check", check);
// result: this is nm NaN

//  let age = prompt("what is your age");
//  age = Number(age)
//  console.log('age', age);
//  console.log(typeof(age));

// ------------------------------------------------------
// type casting - converting one type to another type
// -----------------------------------------------------
let anyThing0 = 12;
anyThing0 = String(anyThing0);
console.log("anyThing0", anyThing0, typeof anyThing0);
// result: anyThing0 12 string

let anyThing1 = "12";
anyThing1 = Number(anyThing1);
console.log("anyThing1", anyThing1, typeof anyThing1);
//result: anyThing1 12 number

let anyThing2 = "12A";
anyThing2 = Number(anyThing2);
console.log("anyThing2", anyThing2, typeof anyThing2);
// result anyThing2 NaN number

// ------------------------------------------------------
// Swapping
// ------------------------------------------------------
// Swap Method 1
let aa = 50;
let bb = 100;
let cc;

cc = aa;
console.log("cc", cc, aa);

aa = bb;
console.log("aa", aa);

bb = cc;
console.log("bb", bb);

// Swap Method 2

let v1 = 200;
let v2 = 400;

v1 = v1 + v2;
console.log(v1);

v2 = v1 - v2;
console.log(v2);

v1 = v1 - v2;
console.log(v1);

// Method 3
let u1 = 5;
let u2 = 10;

console.log("u1", u1);
console.log("u2", u2);

[u1, u2] = [u2, u1];

console.log("u1", u1);
console.log("u2", u2);

// ------------------------------------------------------
// operators
// ------------------------------------------------------
let num1 = 11;
let num2 = 2;

let res = Math.floor(num1 / num2); // round number
console.log(res);

console.log(num1 % num2); // gives reminder

let mod = 4781;
console.log(mod % 100);

console.log(10 == 10);

// AND &&  - OR ||

console.log(10 > 5 && 5 < 10);
console.log(10 < 5 || 5 < 10);

// if
console.log(10 > 11 && 3 < 1 && 100 > 50);
// res: false why? check first cond 10 > 11

console.log(10 > 11 || 3 < 1 || 100 > 50);
// res: true why? check any condition which is true

let ballon = 9;
let post = ballon++;

console.log("ballon", ballon);
console.log("post", post);
// res: baloon 10 post 9

let ballon02 = 9;
let pre = ++ballon02;

console.log("ballon02", ballon02);
console.log("pre", pre);
// res: ballon02 10 pre 10

let i = 11;
i = i++ + ++i;
console.log("i", i);

let parrot = 102;
parrot = parrot++ + ++parrot; // 103 + 1+102
console.log("parrot", parrot); // 206

let elephants = 512;
elephants = elephants-- + --elephants; // 511 + 1-512 => 511+511 = 1022
console.log("elephants", elephants);

// first i will be 12 then plus 1+12 = 24

let j = 10; // 9
j = j-- + --j; // 9+ 8
console.log("j", j);
// j 18

let q = 12;
let r = 22;
let s = q + r + q++ + r++ + ++q + ++r;

console.log("q=", q);
console.log("r=", r);
console.log("s=", s);

// Post-Increment (variable++) = Take it Now, Change it Later
// Pre-Increment (++variable) = Change it Now, then Take
// Why not q++ = 13 and r++ = 23?

//Because q++ returns the value before the increment —
//  that is literally what q++ means.
// If you wanted to use the new value after incrementing, you'd write ++q.

// So:

// q++: use old value (12), then q = 13

// ++q: increment first (14), then use that new value

let isTrue = true;
isTrue++;
console.log(isTrue);

// can not assign a value with increment/decrement
// let isAllowed  = 11++
// console.log(isAllowed)

let check = 10;
console.log(check++);
console.log(check);
console.log(++check);

let check2 = 10;
let ch = check2++ + check2++;

console.log("check2", check2++);
console.log("ch", ch);

let check3 = 10;
let ch3 = check3++ + ++check3;

console.log("check3", check3++);
console.log("ch3", ch3);

// ------------------------------------------------------
// heading
// ------------------------------------------------------

// ------------------------------------------------------
// heading
// ------------------------------------------------------

// ------------------------------------------------------
// heading
// ------------------------------------------------------

// ------------------------------------------------------
// heading
// ------------------------------------------------------

// ------------------------------------------------------
// heading
// ------------------------------------------------------
