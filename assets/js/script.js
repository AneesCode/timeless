document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;

        // Toggle active class
        accordionItem.classList.toggle('active');

        // Toggle content visibility
        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

        // Close other accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            }
        });
    });
});



const imageTrack = document.querySelector('.image-track');
const textSlides = document.querySelectorAll('.text-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateContent() {
    // Update image slider
    const slideWidth = document.querySelector('.image-slide').clientWidth;
    imageTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Update text content
    textSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % textSlides.length;
    updateContent();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + textSlides.length) % textSlides.length;
    updateContent();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Handle window resize
window.addEventListener('resize', () => {
    updateContent();
});

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const section = document.querySelector('.tl-collaboration-seamless');
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if section is in view
    if (currentScroll > sectionTop - window.innerHeight / 2 &&
        currentScroll < sectionTop + sectionHeight) {

        if (currentScroll > lastScroll) {
            // Scrolling down - hands come in
            section.classList.add('active');
        } else {
            // Scrolling up - hands go out
            section.classList.remove('active');
        }
    }

    lastScroll = currentScroll;
}, { passive: true });


// Slow scroll when clicking an anchor link
window.addEventListener('scroll', function () {
    // Run only on desktop (min-width > 768px)
    if (window.innerWidth > 768) {
      const navbar = document.querySelector('.navbar');
      const header = document.querySelector('header');
  
      if (window.scrollY > window.innerHeight * 0.52) {
        navbar.classList.add('show-menu');
        header.classList.add('show-menu');
      } else {
        navbar.classList.remove('show-menu');
        header.classList.remove('show-menu');
      }
    }
  });


document.querySelectorAll(".hamburger").forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("is-active");

      // Toggle menu visibility
      const navWrapper = element.closest('.nav-menu-wrapper');
      navWrapper.classList.toggle("active");
    });
  });

  const hamburger = document.getElementById("hamburger");
  const navWrapper = document.getElementById("nav-menu-wrapper");
  const header = document.querySelector("header");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navWrapper.classList.toggle("active");
  
    // Toggle white background on header when nav is active
    if (navWrapper.classList.contains("active")) {
      header.style.backgroundColor = "white";
    } else {
      header.style.backgroundColor = "";
    }
  });
  document.querySelectorAll(".hamburger").forEach((element) => {
    element.addEventListener("click", (event) => {
      element.classList.toggle("is-active");
    });
  });
  
  