let currentSlide = 0;
const slides = document.querySelectorAll('.image-slide');
let slideshowInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function startSlideshow() {
    slideshowInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 2000); // Interval de 2 secunde
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

document.getElementById('startSlideshow').addEventListener('click', startSlideshow);
document.getElementById('stopSlideshow').addEventListener('click', stopSlideshow);

showSlide(currentSlide);
