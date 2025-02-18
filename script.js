console.log("ILP Summary Website Loaded");

const cardContainer = document.getElementById('card-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const days = Array.from({ length: 20 }, (_, i) => ({
    day: i + 1,
    imgSrc: `media/days/Day ${i + 1}.png`

}));

days.forEach((day) => {
    const card = document.createElement('div');
    card.classList.add('day-card');

    const img = document.createElement('img');
    img.src = day.imgSrc;
    img.alt = `Day ${day.day}`;

    const text = document.createElement('p');
    text.textContent = `ILP Day ${day.day}`;

    card.addEventListener('click', () => {
        window.location.href = `data.html?day=${day.day}`; // Redirect to dayX.html
    });

    card.appendChild(img);
    card.appendChild(text);
    cardContainer.appendChild(card);
});

let index = 0;
const cardWidth = 220;
const visibleCards = 3;
const totalCards = days.length;
const maxIndex = totalCards - visibleCards;

function updateCarousel() {
    cardContainer.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {  
        navbar.style.backgroundColor = "#191919"; 
        navbar.style.transition = "background-color 0.3s ease";
    } else {
        navbar.style.backgroundColor = "transparent"; 
    }
});
