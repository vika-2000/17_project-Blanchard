new Swiper('.slider', {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1,
    }
  }, 
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true
  }, 
})