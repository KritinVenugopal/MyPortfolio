// typing animation script
document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi, I'm Kritin"; // Text to be typed
    const speed = 100; // Typing speed in milliseconds (slower speed)
    const element = document.getElementById('typing-text');
    let animationFrame; // Variable to hold the animation frame
    const repeatInterval = 15000; // Repeat interval in milliseconds (15 seconds)
    let repeatTimeout; // Variable to hold the repeat timeout
  
    function typeWriter() {
      let i = 0;
      // Reset the text element
      element.innerHTML = '';
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          // Adjust speed here by using the speed variable in setTimeout
          animationFrame = setTimeout(type, speed);
        }
      }
      type(); // Start the typing animation
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
      }
    }
  
    startAnimation(); // Start the initial animation
    window.addEventListener('scroll', scrollHandler);
});
