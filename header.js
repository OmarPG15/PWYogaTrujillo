
// header
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("abajo",window.scrollY>0);
    var wave = document.querySelector('.section')
    wave.classList.toggle("abajo",window.scrollY>0);
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('#header');
    var wave = document.querySelector('.section');
    var image = document.querySelector('.large-image img'); // Asegúrate de que este selector sea correcto

    // Obtener la altura total de la imagen
    var imageBottom = image.offsetTop + image.offsetHeight;

    // Verificar si el scroll ha pasado la imagen
    if (window.scrollY > imageBottom) {
        // Detener el movimiento del encabezado después de la imagen
        header.style.opacity = 0;
        
    } else {
        // Aplicar el efecto de bajar cuando haces scroll pero antes de pasar la imagen
        header.style.opacity = 1;
    }
});

// modal

window.addEventListener('DOMContentLoaded', ()=>{
    // const openb = document.getElementById('openX');
    const closeb = document.querySelector('.exitBtn');
    const formulario = document.getElementById('formulario');
    
    
    formulario.showModal();
    // openb.addEventListener('click',() =>{  
    //     formulario.showModal();
    // });

    closeb.addEventListener('click',(event) => {
        event.preventDefault();
        formulario.close();
    });
})

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})



