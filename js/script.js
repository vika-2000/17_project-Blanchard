
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

// TABS

function slidesPlugin(activeSlide = 2) {
  const slides = document.querySelectorAll('.tabs__btn');

  slides[activeSlide].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}

slidesPlugin();

document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.tab-content').forEach(function (tabContent) {
      tabContent.classList.remove('tab-content-active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
  });
});

// ACCORDION

$(".js-accordion").accordion({
  collapsible: true,
  active: 0,
  icons: false,
  heightStyle: 'content',
  classes: {
    "ui-accordion-header-active": "is-active",
  }
});


