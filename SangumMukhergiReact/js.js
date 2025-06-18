// Task: Print "Eligible to vote" if the person is at least 18 and is a citizen.
let age = 20;
let isCitizen = true;

if (age >= 18 && isCitizen) {
  console.log("Eligible to vote");
}

// Task: Print "Login successful" if username is "admin" and password is "1234".
// Given:
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
}

// Task: Print "Discount applied" if the user is a member or has a coupon.
// Given:
let isMember = false;
let hasCoupon = true;
if (isMember || hasCoupon) {
  console.log("Discount applied");
}

// Task: Print "Temperature is normal" if the temp is between 20 and 30 (inclusive).
// Given:
let temp = 25;

if (temp >= 20 && temp <= 30) {
  console.log("Temperature is normal");
}

// Task: Show content if the user is logged in or an admin.
// Given:
let isLoggedIn = false;
let isAdmin = true;
console.log(isLoggedIn || isAdmin);

// Task: Print `hasName`. Explain why this works.
// Given:
let name = "";
let hasName = name || "Anonymous";

console.log(
  `${hasName} - because when there is no vlaue it assumes it as a false and then it goes to the next which is Anonymous`
); // Anonymous

