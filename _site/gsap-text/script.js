document.addEventListener("DOMContentLoaded", function (event) {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  // Animate titles, easy
  document.querySelectorAll(".js-title").forEach((element) => {
    SplitText.create(element, {
      type: "words, chars",
      mask: "lines",
      linesClass: "line++",
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
          delay: 0.25,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      },
    });
  });

  // Pulse animation for characters
  document.querySelectorAll(".js-pulse").forEach((element) => {
    const split = SplitText.create(element, {
      type: "chars",
      charsClass: "pulse-char",
    });

    gsap.set(split.chars, {
      display: "inline-block",
      transformOrigin: "50% 50%",
      willChange: "transform, opacity",
    });

    const pulseTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2.5,
      paused: true,
    });

    split.chars.forEach((char) => {
      if (!char.textContent.trim()) return;

      pulseTl.to(
        char,
        {
          scale: 2,
          y: -2,
          duration: 0.14,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        ">-0.02",
      );
    });

    // Only animate while visible
    ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => pulseTl.play(),
      onEnterBack: () => pulseTl.play(),
      onLeave: () => pulseTl.pause(0),
      onLeaveBack: () => pulseTl.pause(0),
    });
  });

  // Pulse the monospaces
  document.querySelectorAll(".js-intro").forEach((element) => {
    const split = SplitText.create(element, {
      type: "chars",
      charsClass: "intro-char",
    });

    gsap.set(split.chars, {
      display: "inline-block",
      autoAlpha: 0,
      x: -24,
      willChange: "transform, opacity",
    });

    gsap.fromTo(
      split.chars,
      { x: -24, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  // Rainbow, because we can
  document.querySelectorAll(".js-lead").forEach((element) => {
    const split = SplitText.create(element, {
      type: "chars",
      charsClass: "lead-char",
    });

    gsap.set(split.chars, {
      display: "inline-block",
      autoAlpha: 0,
      y: 20,
      willChange: "transform, opacity, color",
    });

    gsap.to(split.chars, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      delay: 1, // after one second
      color: (i, target, list) => `hsl(${(i / list.length) * 360}, 85%, 60%)`,
      stagger: {
        each: 0.03,
        from: "random", // shuffle order
      },
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
