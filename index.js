
// Carousel function
function initializeCarousel() {
    const carousel = document.getElementById('carousel');
    if (!carousel) {
        return;
    }

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

function initializePopup(){
    const popup = document.getElementById('popup');
    const popupBg = document.getElementById('popup-bg');
    const good = document.getElementById('good');
    const bad = document.getElementById('bad');

    if (!popup){
        return;
    }
    popup.classList.remove('hidden');
    
    function closePopup(){
        popup.classList.add('hidden');
    }
    
    popupBg.addEventListener('click', closePopup);

    function onGoodClick(){
        good.classList.remove("fa-thumbs-up");
        good.classList.add("fa-face-smile");
  
    }
    good.addEventListener('click', onGoodClick);

    function onBadClick(){
        bad.classList.remove("fa-thumbs-down");
        bad.classList.add("fa-face-sad-tear");
  
    }

    bad.addEventListener('click', onBadClick);
}


// On page load
document.addEventListener("DOMContentLoaded", () => {
    initializeCarousel();
    setInterval(initializePopup, 10000);
});
