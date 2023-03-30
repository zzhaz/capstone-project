
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

function initializePopup() {
    const popup = document.getElementById('popup');
    const popupBg = document.getElementById('popup-bg');
    const good = document.getElementById('good');
    const happy = document.getElementById('happy');
    const sad = document.getElementById('sad');
    const bad = document.getElementById('bad');
    const sendButton = document.getElementById('send-button');

    if (window.localStorage.getItem('popupShown')) {
        return;
    }

    if (!popup) {
        return;
    }


    popup.classList.remove('hidden');

    function closePopup() {
        popup.classList.add('hidden');
        window.localStorage.setItem('popupShown', true);
    }

    popupBg.addEventListener('click', closePopup);

    function onGoodClick() {
        good.classList.add('hidden');
        happy.classList.remove('hidden');
        bad.classList.remove('hidden');
        sad.classList.add('hidden');
        sendButton.removeAttribute('disabled');
    }

    good.addEventListener('click', onGoodClick);

    function onBadClick() {
        bad.classList.add('hidden');
        sad.classList.remove('hidden');
        good.classList.remove('hidden');
        happy.classList.add('hidden');
        sendButton.removeAttribute('disabled');
    }

    bad.addEventListener('click', onBadClick);

    function onSendClick() {
        closePopup();
    }

    sendButton.addEventListener('click', onSendClick);
}


// On page load
document.addEventListener("DOMContentLoaded", () => {
    initializeCarousel();
    setInterval(initializePopup, 10000);
});
