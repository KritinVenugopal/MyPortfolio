// inner page project slider
let slideIndex = 0;
const slides = document.querySelectorAll('.card-out');
const slideInterval = 5000; // 5 seconds

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'inline-block';

    // Increment slide index for the next slide
    slideIndex++;
    // Reset slide index to 0 if it exceeds the number of slides
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
        showSlides();
    }

    // Hide or show navigation buttons
    toggleButtons();
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlides();
    }

    // Hide or show navigation buttons
    toggleButtons();
}

function toggleButtons() {
    const prevButton = document.querySelector('.projectPrev');
    const nextButton = document.querySelector('.projectNext');

    // // Hide previous button on first slide
    // if (slideIndex === 0) {
    //     prevButton.style.display = 'none';
    // } else {
    //     prevButton.style.display = 'inline-block';
    // }

    // // Hide next button on last slide
    // if (slideIndex === slides.length - 1) {
    //     nextButton.style.display = 'none';
    // } else {
    //     nextButton.style.display = 'inline-block';
    // }
}

// Show the first slide initially
showSlides();
// Hide or show navigation buttons initially
toggleButtons();
// Set interval for auto-sliding
setInterval(showSlides, slideInterval);
