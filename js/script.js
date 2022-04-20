
//slide
let heroSlider = new Swiper('.art__swiper' , {
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 4000,
  },
  effect: 'fade',
});

// dropdown
$('.dropdown__btn').click(function () {
  $(this).toggleClass('open');
  $('.dropdown__btn').not(this).removeClass('open');
});

// gallery слайдер
const gallerySlider = new Swiper('.gallery__swiper-container', {
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery__btn-next',
    prevEl: '.gallery__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущие слайды',
    nextSlideMessage: 'Следующие слайды',
  },
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  slidesPerGroup: 3,
  spaceBetween: 50,
  speed: 800,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
      spaceBetween: 15,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 34,
    },
    1400: {
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1,
      },
      spaceBetween: 50,
      speed: 600,
    },
  },
});


// gallery select
const galleryChoices = new Choices('.gallery__select', {
  searchEnabled: false, //надо
  itemSelectText: null, //надо
  searchChoices: false,
  classNames: {
    containerOuter: 'choices gallery__choices',
  },
});

//tabs
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.step-link').forEach(function(steplink) {
    steplink.addEventListener('click', function(event) {
   
      event.preventDefault ();
      const path = event.currentTarget.dataset.path


      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('active')
      })
      
      document.querySelectorAll('.step-link').forEach(function(steplink) {
        steplink.classList.remove('active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('active')
      event.currentTarget.classList.add('active')
    })
  })
})


