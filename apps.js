const tl = gsap.timeline({ defaults: { duration: 0.6 } });



gsap.registerPlugin(ScrollTrigger);
// Header Animation
tl.from(
  ".header #nav-left h2, .header #logo , .header #nav-right h2, .header #menu, .header #searchSVG",
  {
    y: -150,
    stagger: 0.05,
    opacity: 0
  }
);

// Section 1 Animation
tl.from(".text h1, .text h4, .text .Page1-button", {
  y: 100,
  opacity: 0,
  stagger: 0.2
});

// Section 2 Animation
gsap.from(".quoteBig, .quoteSmall", {
  duration: 0.5,
  opacity: 0,
  scale: 0.5,
  scrollTrigger: {
    trigger: "#page2",
    start: "top center"
  }
});
gsap.to("#page2-img1", {
  x: -30,
  y: -30,
  duration: 0.75,
  scrollTrigger: {
    trigger: "#page2",
    start: "top center"
  }
});
gsap.to("#page2-img2", {
  x: 30,
  y: 30,
  duration: 0.75,
  scrollTrigger: {
    trigger: "#page2",
    start: "top center"
  }
});

// Section 3 Animation
gsap.from("#page3 h1", {
  opacity: 0,
  y: -100,
  scrollTrigger: {
    trigger: "#page3",
    start: "top 80%"
  }
});
gsap.from(".p3-cards-conatiner", {
  opacity: 0,
  scale: 0.6,
  duration: 1,
  scrollTrigger: {
    trigger: "#page3",
    start: "top 80%"
  }
});
gsap.from(".p3-cards-conatiner img, .p3-cards-conatiner a", {
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page3",
    start: "top 80%"
  }
});

// Section 4 Animation
gsap.from("#page4-text h1, #page4-text h3, .miniConatinerPage2", {
  x: 50,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page4",
    start: "top 70%"
  }
});

gsap.from(".scrollDown", {
  y: 30,
  repeat: -1,
  yoyo: true
});