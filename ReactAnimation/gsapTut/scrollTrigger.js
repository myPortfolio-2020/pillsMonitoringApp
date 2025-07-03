gsap.from(".page1 .pageBox", {
  scale: 0,
  duration: 2,
  delay: 2,
  rotate: 360,
});
gsap.from(".page2 .pageHd1", {
  scale: 0,
  duration: 2,
  delay: 2,
  rotate: 5,
  scrollTrigger: {
    trigger: ".page2 .pageHd1",
    scroller: "body",
    markers: false,
    start: "top 55%",
    end: "top 30%",
    scrub: 5, // value 1-5 or true if 5 more smooth
    // pin: true,
  },
});
gsap.from(".page2 .pageHd2", {
  scale: 0,
  duration: 2,
  delay: 2,
  rotate: 5,
  scrollTrigger: {
    trigger: ".page2 .pageHd2",
    scroller: "body",
    markers: false,
    start: "right 55%",
    end: "left 30%",
    scrub: 5, // value 1-5 or true if 5 more smooth
  },
});
