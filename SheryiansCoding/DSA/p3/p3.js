console.log("chapter 3Everything About Loops - part 3");

// how for loop works
// first read, i=1 then go to condition i<=10 then go to execute the block{}
// then i++
// then condition then {} and repeat till fulfill the condition

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// const userNum = Number(prompt("enter user number"));

for (let i = 1; i < 50; i++) {
  if (i === 15) break;  // gives result 1 to 15 break after 14
  else console.log(i);
}

for (let i = 1; i < 50; i++) {
    if (i === 15) continue;  // leave 15
    else console.log(i);
  }
  

  