
// Carousel function
function initializeCarousel() {
    const carousel = document.getElementById('carousel');
    const images = [...carousel.getElementsByTagName('img')];
    const prevButton = document.getElementById('carousel-control-prev');
    const nextButton = document.getElementById('carousel-control-next');

    let index = 0;

    function updateCarousel() {
        for (let image of images) {
            image.classList.add('hidden');
        }
        images[index].classList.remove('hidden');
    }

    function nextImage() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    }

    prevButton.addEventListener('click', prevImage);

    nextButton.addEventListener('click', nextImage);

    updateCarousel();
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
    initializeCarousel();
});
