window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
    setting-name: setting-value
    })
})
new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });