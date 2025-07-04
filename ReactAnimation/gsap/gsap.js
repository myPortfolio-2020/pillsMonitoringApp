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

gsap.from("#page1 #pgBox", {
  duration: 2,
  rotate: 360,
  stagger: 0.6,
  scale: 0.2,
});

gsap.from("#page2 #pgBox", {
  duration: 2,
  rotate: 360,
  stagger: 0.6,
  scale: 0.2,
  //   scrollTrigger: "#page2 #pgBox",
  scrollTrigger: {
    trigger: "#page2 #pgBox",
    scroller: "body",
    markers: true,
    start: "top 55%",
    end: "top 30%",
    scrub: 5, // value 1-5 or true if 5 more smooth
  },
});

gsap.from("#page3 #pgBox", {
  duration: 2,
  rotate: 360,
  stagger: 0.6,
  scale: 0.2,
  rotate: 2,
  //   scrollTrigger: "#page2 #pgBox",
  scrollTrigger: {
    trigger: "#page3 #pgBox",
    scroller: "body",
    markers: true,
    start: "top 55%",
    end: "top 30%",
    scrub: 5, // value 1-5 or true if 5 more smooth
  },
});
