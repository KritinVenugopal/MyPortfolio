const slider = document.querySelector('.aer-slider');
const slides = document.querySelectorAll('.aer-slide');
const previewContainer = document.querySelector('.aer-preview-container');
const prevButton = document.getElementById('aer-prev');
const nextButton = document.getElementById('aer-next');
let currentIndex = 0;

function updatePreview() {
    // Clear previous preview images
    previewContainer.innerHTML = '';

    // Add preview images for all but the current slide
    for (let i = 0; i < slides.length; i++) {
        if (i !== currentIndex) {
            const previewImage = document.createElement('img');
            previewImage.classList.add('aer-preview-image');
            previewImage.src = slides[i].querySelector('img').src;
            previewImage.alt = `Preview Image ${i + 1}`;
            previewContainer.appendChild(previewImage);
        }
    }

    // Add click event listener to new preview images
    const newPreviewImages = document.querySelectorAll('.aer-preview-image');
    newPreviewImages.forEach((previewImage, index) => {
        previewImage.addEventListener('click', () => {
            currentIndex = index < currentIndex ? index : index + 1;
            goToSlide(currentIndex);
        });
    });
}

function goToSlide(index) {
    currentIndex = index;
    const translateValue = -index * slides[0].clientWidth;
    slider.style.transform = `translateX(${translateValue}px)`;
    updatePreview();
}

// Initially update preview
updatePreview();

// Automatic sliding with 7 seconds interval
const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}, 7000);

// Next button click event
nextButton.addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
});

// Previous button click event
prevButton.addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(currentIndex);
});