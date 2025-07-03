var tl = gsap.timeline();
tl.from(".logo", {
  color: "blue",
  y: -100,
  duration: 1,
  delay: 1,
});
tl.from(".link", {
  color: "blue",
  y: -100,
  duration: 1,
  stagger: 0.5,
});
