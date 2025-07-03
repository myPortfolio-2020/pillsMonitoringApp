gsap.to(".expage2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: ".expage2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
