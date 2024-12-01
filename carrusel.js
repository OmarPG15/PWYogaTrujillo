document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel');
    const btnLeft = document.querySelector('#left');
    const btnRight = document.querySelector('#right');

    // Calcula el ancho de un card dinámicamente
    const getCardWidth = () => {
        const card = carrusel.querySelector('.cart');
        return card ? card.offsetWidth : 0; // Retorna el ancho de un card
    };

    btnLeft.addEventListener('click', function () {
        const cardWidth = getCardWidth();
        carrusel.scrollBy({
            left: -cardWidth,
            behavior: 'smooth',
        });
    });

    btnRight.addEventListener('click', function () {
        const cardWidth = getCardWidth();
        carrusel.scrollBy({
            left: cardWidth,
            behavior: 'smooth',
        });
    });
});
