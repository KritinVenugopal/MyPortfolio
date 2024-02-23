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