gsap.to(".box01", {
  x: 1000,
  backgroundColor: "rgb(247, 2, 68)",
  duration: 2,
  delay: 1, // start after 1 sec
  rotate: 360,
  borderRadius: "50%",
  scale: 2,
  repeat: 1, // move 2 times - why - bydefault 1 time and then reapeat 1
  repeat: -1, // repeat continiously -  but start every time from initail position not like pendolum
  yoyo: true,
});

gsap.from(".box02", {
  x: 1000,
  backgroundColor: "rgb(0, 197, 197)",
  duration: 2,
  delay: 1, // start after 1 sec
  rotate: 360,
  borderRadius: "50%",
  scale: 3,
});

// they will move togeter
// gsap.from("h1", {
//   color: "blue",
//   y: 170,
//   duration: 2,
//   delay: 1,
// });

// one by one
gsap.from("h1", {
  color: "blue",
  y: 170,
  duration: 2,
  delay: 1,
  stagger: 0.3,
});
