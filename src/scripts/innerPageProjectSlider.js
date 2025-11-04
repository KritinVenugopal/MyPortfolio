let currentSlide = 0;
    const slides = document.querySelectorAll('.card-out');

    // Function to show previous slide
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length - 1;
        }
        updateSlider();
    }

    // Function to show next slide
    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    }

    // Function to update slider based on currentSlide
    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.display = 'block'; // Show current slide
            } else {
                slide.style.display = 'none'; // Hide other slides
            }
        });
    }