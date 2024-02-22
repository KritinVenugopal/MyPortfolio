window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const heroHeight = document.querySelector('.hero').offsetHeight;
  
  // Check if scrolled past the hero section
  if (window.scrollY > heroHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// typing animation script
document.addEventListener('DOMContentLoaded', function() {
  const text = "Hi, I'm Kritin"; // Text to be typed
  const speed = 50; // Typing speed in milliseconds
  const element = document.getElementById('typing-text');
  let repeatInterval = 15000; // Repeat interval in milliseconds (15 seconds)
  let repeatTimeout; // Variable to hold the repeat timeout

  function typeWriter() {
    let i = 0;
    element.innerHTML = ''; // Reset the text element
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type(); // Start the typing animation
  }

  function repeatAnimation() {
    clearTimeout(repeatTimeout); // Clear any previous repeat timeout
    typeWriter(); // Start the animation
    repeatTimeout = setTimeout(repeatAnimation, repeatInterval); // Schedule next animation
  }

  function scrollHandler() {
    const heroSection = document.getElementById('about');
    const heroSectionTop = heroSection.getBoundingClientRect().top;

    if (heroSectionTop >= 0 && heroSectionTop < window.innerHeight) {
      // User has scrolled back to the hero section
      repeatAnimation(); // Restart the animation
    }
  }

  repeatAnimation(); // Start the initial animation
  window.addEventListener('scroll', scrollHandler);
});




// card section
/*document.addEventListener('DOMContentLoaded', function() {
  const viewMoreBtn = document.getElementById('view-more-btn');
  const hiddenCards = document.querySelectorAll('.hidden');

  viewMoreBtn.addEventListener('click', function() {
    hiddenCards.forEach(card => {
      card.classList.toggle('hidden');
    });

    if (viewMoreBtn.textContent === 'View More Projects') {
      viewMoreBtn.textContent = 'View less';
    } else {
      viewMoreBtn.textContent = 'View More Projects';
    }
  });
});*/
// active link switching
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbar a");

  window.addEventListener("scroll", function() {
    let bottomOfViewport = window.scrollY + window.innerHeight;
    let offset = window.innerHeight * 0.4; // 20% of the viewport height

    sections.forEach(section => {
      let sectionTop = section.offsetTop;
      let sectionBottom = sectionTop + section.offsetHeight;

      if (
        sectionTop < bottomOfViewport - offset &&
        sectionBottom > window.scrollY + offset
      ) {
        navLinks.forEach(link => {
          if (link.hash === "#" + section.id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  });
});
