const carousel = document.querySelector('.carousel');
const arrowIcons = document.querySelectorAll('.wrapper i');

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const isLeft = icon.classList.contains("fa-chevron-left");
        
        if (isLeft) {
        
            const lastImage = carousel.lastElementChild;
            carousel.insertBefore(lastImage, carousel.firstElementChild);
        } else {
            
            const firstImage = carousel.firstElementChild;
            carousel.appendChild(firstImage);
        }
    });
});   