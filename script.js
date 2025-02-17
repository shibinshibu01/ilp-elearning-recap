console.log("ILP Summary Website Loaded");

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const cardContainer = document.querySelector('.card-container');
let scrollAmount = 0;

const cardWidth = cardContainer.querySelector('.day-card').offsetWidth + 20; // Include margin

nextButton.addEventListener('click', () => {
    const maxScroll = cardContainer.scrollWidth - cardContainer.clientWidth;
    if (scrollAmount < maxScroll) {
        scrollAmount += cardWidth * 3; 
        if (scrollAmount > maxScroll) {
            scrollAmount = maxScroll; 
        }
        cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= cardWidth * 3; 
        if (scrollAmount < 0) {
            scrollAmount = 0; 
        }
        cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
});