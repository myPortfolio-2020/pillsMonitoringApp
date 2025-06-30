// loops
// break
// continue

for (let i = 0; i <= 7; i++) {
  if (i >= 4) {
    break;
  }
  console.log("this loop works till i >= 4:", i);
}
// output
// loop works for i: 0
// loop works for i: 1
// loop works for i: 2
// loop works for i: 3

for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue;
  }
  console.log("i should not equal to 1:", i);
}
// continue means skip this condition and go to the next
// NOTICE IT WILL NOT PRINT THE VALUE AT WHEN i === 1
// i should not equal to 1: 0
// i should not equal to 1: 2
// i should not equal to 1: 3
// i should not equal to 1: 4
