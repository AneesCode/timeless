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
  if (currentScroll > sectionTop - window.innerHeight/2 && 
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



  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
