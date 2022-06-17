
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
  slidesPerView: 1,
  grid: {
    rows: 2,
  },
  slidesPerGroup: 1,
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

// gallery select choices
const galleryChoices = new Choices('.gallery__select', {
  searchEnabled: false, //надо
  itemSelectText: null, //надо
  searchChoices: false,
  classNames: {
    containerOuter: 'choices gallery__choices',
  },
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

/* Swiper-Events */
new Swiper('.swiper-events', {
  loop: false,
  pagination: {
    el: '.swiper-pagination-events',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    577: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1025: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});

/* Section-Projects */
// projects слайдер

const projectsSwiper = new Swiper('.projects__swiper', {
  navigation: {
    nextEl: '.projects__swiper-next',
    prevEl: '.projects__swiper-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущие слайды',
    nextSlideMessage: 'Следующие слайды',
  },

  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  speed: 800,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    850: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});


// tooltip
tippy('#tooltip-one', {
  content: '<p style="max-height: 40px; text-align: center; font-size: 12px; font-weight: 600;">Пример современных тенденций - современная методология разработки </p>',
  maxWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
  duration: 1500,
});

tippy('#tooltip-two', {
  content: '<p style="min-height: 55px; text-align: center; font-size: 12px; font-weight: 600;">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  </p>',
  maxWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
  duration: 1500,
});

tippy('#tooltip-three', {
  content: '<p style="min-height: 25px; text-align: center; font-size: 12px; font-weight: 600;">В стремлении повысить качество </p>',
  minWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
  duration: 1500,
});

//inputmask
var selector = document.querySelector('input[type="phone"]');
var im = new Inputmask('+7 (999)-999-99-99');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
    
//validate
new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    phone: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Минимальная длинна 5 символов',
    },
    phone: {
      required: 'Укажите ваш телефон', 
    },
    email: {
      required: 'Укажите ваш E-mail', 
    }
  }
});

// MAP
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "200px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "120px", right: "20px" }
  });

  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.758468, 37.601088] // координаты точки
    }
  });


  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref:  'img/contacts/map-icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -20]
  });

  // Размещение геообъекта на карте.
  // myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
}

