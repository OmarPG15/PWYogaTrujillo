document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#left').addEventListener('click', function() {
        const carrusel = document.querySelector('.carrusel');
        carrusel.scrollBy({
            left:-450,
            behavior:'smooth'
        }); // Ajusta el valor según el ancho de los artículos (.cart)

    });
    document.querySelector('#right').addEventListener('click', function() {
        const carrusel = document.querySelector('.carrusel');
        carrusel.scrollBy({
            left:450,
            behavior:'smooth'
        }); // Ajusta el valor según el ancho de los artículos (.cart)
    });
});
