$('.slider-nav').slick({

  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  asNavFor: '.slider-for',
});
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});