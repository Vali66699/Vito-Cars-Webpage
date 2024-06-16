
let currentIndex = 0; 

function moveCarousel(direction) {
    const productsContainer = document.querySelector('.products-container');
    const productItems = document.querySelectorAll('.product-item');
    const itemWidth = productItems[0].offsetWidth; 


    currentIndex = currentIndex + direction;


    if (currentIndex < 0) {
        currentIndex = productItems.length - 1;
    } else if (currentIndex >= productItems.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * itemWidth;

    productsContainer.style.transform = `translateX(${offset}px)`;
}
