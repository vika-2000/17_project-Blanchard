
defaultSelect ();

   // dropdown
   $('.dropdown__btn').click(function () {
    $(this).toggleClass('open');
    $('.dropdown__btn').not(this).removeClass('open');
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