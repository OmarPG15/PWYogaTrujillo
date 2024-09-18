window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("abajo",window.scrollY>0);
    var wave = document.querySelector('.section')
    wave.classList.toggle("abajo",window.scrollY>0);
});
