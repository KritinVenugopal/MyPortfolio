// typing animation script
document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi, I'm Kritin"; // Text to be typed
    const speed = 50; // Typing speed in milliseconds (slower speed)
    const element = document.getElementById('typing-text');
    let animationFrame; // Variable to hold the animation frame
    const repeatInterval = 15000; // Repeat interval in milliseconds (15 seconds)
    let repeatTimeout; // Variable to hold the repeat timeout
    let isAnimating = false; // Flag to track animation state
  
    function typeWriter() {
      let i = 0;
      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          animationFrame = setTimeout(type, speed);
        } else {
          isAnimating = false; // Animation complete
        }
      }

      // Start typing only if not already animating
      if (!isAnimating) {
        isAnimating = true;
        element.textContent = ''; // Clear existing text
        type(); // Start typing animation
      }
    }
  
    function repeatAnimation() {
      clearTimeout(repeatTimeout); // Clear any previous repeat timeout
      typeWriter(); // Start the animation
      repeatTimeout = setTimeout(repeatAnimation, repeatInterval); // Schedule next animation
    }
  
    function startAnimation() {
      repeatAnimation(); // Start the animation
    }
  
    function scrollHandler() {
      const heroSection = document.getElementById('about');
      const heroSectionTop = heroSection.getBoundingClientRect().top;
  
      if (heroSectionTop >= 0 && heroSectionTop < window.innerHeight) {
        // User has scrolled back to the hero section
        startAnimation(); // Restart the animation
      } else {
        cancelAnimationFrame(animationFrame); // Stop the animation if not in view
        clearTimeout(repeatTimeout); // Stop repeat if not in view
        isAnimating = false; // Reset animation flag
      }
    }
  
    startAnimation(); // Start the initial animation
    window.addEventListener('scroll', scrollHandler);
});

