document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set initial positions
  gsap.set(".tl-left-hand", { x: "-40%" });
  gsap.set(".tl-right-hand", { x: "40%" });

  // Hands animation timeline
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".tl-collaboration-seamless",
          scrub: 1,
          markers: false // Set to true for visual debugging
      }
  });

  // Animate hands inward
  tl.to(".tl-left-hand", { x: "10%", duration: 1 })
    .to(".tl-right-hand", { x: "10%", duration: 1 }, 0);
});

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Set initial position
  gsap.set(".tl-collaboration-elevated-time p", {
    x: "3vw", // Start off-screen to the right
    opacity: 0.5
  });

  // Create animation timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".tl-collaboration-elevated-time",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false // Set to true for debugging
    }
  });

  // Animate text from right to left
  tl.to(".tl-collaboration-elevated-time p", {
    x: "-3vw", // Move to left outside viewport
    opacity: 1,
    ease: "none"
  });
});






gsap.to(".tl-swift-eye-img img", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".tl-swift-eye-img",
    start: "top center",  // Animation starts when top of image hits center
    end: "bottom center", // Animation ends when bottom hits center
    scrub: 1,             // Smooth lazy animation
    markers: false        // Set true if you want to debug
  }
});
gsap.to(".tl-swift-img img", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".tl-swift-img",
    start: "top center",  // Animation starts when top of image hits center
    end: "bottom center", // Animation ends when bottom hits center
    scrub: 1,             // Smooth lazy animation
    markers: false        // Set true if you want to debug
  }
});


gsap.to(".tl-stroytelling-description", {
  y: -40, // Move tiny up when scrolling down
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".tl-stroytelling-description",
    start: "top bottom", 
    end: "bottom top",
    scrub: 1, // Smooth and lazy
  }
});

const countElement = document.querySelector(".tl-client-rate h2");

let countAnimation;

// Create ScrollTrigger
ScrollTrigger.create({
  trigger: ".tl-client-rate",
  start: "top 80%",
  end: "bottom top",
  onEnter: () => {
    // Animate from 0 to 94%
    countAnimation = gsap.fromTo(countElement, 
      { innerText: 0 }, 
      { 
        innerText: 94, 
        duration: 1.5, 
        snap: { innerText: 1 }, 
        ease: "power1.out",
        onUpdate: function() {
          countElement.textContent = `${Math.round(this.targets()[0].innerText)}%`;
        }
      }
    );
  },
  onLeaveBack: () => {
    // Reset to 0% when scrolling up
    if (countAnimation) countAnimation.kill();
    countElement.textContent = "0%";
  }
});

// Optional: Add rotation for more dynamic effect
