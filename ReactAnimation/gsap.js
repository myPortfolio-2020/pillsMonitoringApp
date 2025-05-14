// gsap.to("#box", {
//   x: 456,
//   backgroundColor: "red",
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   borderRadius: "50%",
//   scale: 0.5,
// });

gsap.from("#box", {
  x: 456,
  backgroundColor: "red",
  duration: 2,
  delay: 1,
  rotate: 360,
  borderRadius: "50%",
  scale: 0.5,
  opacity: 0,
  stagger: 0.3,
  //   repeat:1, two times
  repeat: -1, //infinite
  yoyo: true,
});

gsap.from("h1", {
  y: 50,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 0.3,
  //   repeat:1, two times
  repeat: -1, //infinite
});

var tl = gsap.timeline();

tl.to(".boxOne", {
  x: 1300,
  duration: 2,
  delay: 1,
  rotate: 360,
  stagger: 0.3,
  //   repeat:1, two times
});
tl.to(".boxTwo", {
  x: 1300,
  duration: 2,
  rotate: 180,
  stagger: 0.3,
  //   repeat:1, two times
});
tl.to(".boxThree", {
  x: 1300,
  duration: 2,
  rotate: 90,
  stagger: 0.3,
  //   repeat:1, two times
});
