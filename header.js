
// header
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



