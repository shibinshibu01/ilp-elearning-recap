console.log("ILP Summary Website Loaded");

const cardContainer = document.getElementById('card-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const isIndexPage = window.location.pathname.includes("index.html") || window.location.pathname === "/";
const numCardsToDisplay = isIndexPage ? 3 : 20;

const days = Array.from({ length: numCardsToDisplay }, (_, i) => ({
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
        window.location.href = `data.html?day=${day.day}`;
    });

    card.appendChild(img);
    card.appendChild(text);
    cardContainer.appendChild(card);
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
