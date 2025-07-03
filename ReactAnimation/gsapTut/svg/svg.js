var initialPath = `M 10 100 Q 500 100 996 100`;

var finalPath = `M 10 100 Q 500 100 996 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q 500 ${dets.y} 996 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.36,
  });
});

string.addEventListener("mouseleave", function () {
  console.log("leave");
});
