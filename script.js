console.log("ILP Summary Website Loaded");

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const cardContainer = document.querySelector('.card-container');
let scrollAmount = 0;

const cardWidth = cardContainer.querySelector('.day-card').offsetWidth + 25;

nextButton.addEventListener('click', () => {
    if (scrollAmount < (cardContainer.scrollWidth - cardContainer.clientWidth)) {
        scrollAmount += cardContainer.clientWidth / 3; 
        cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= cardContainer.clientWidth / 3; 
        cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
});
