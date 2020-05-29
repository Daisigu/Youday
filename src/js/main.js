$(document).ready(function(){
  $('.slider-for').slick({
    
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      
      
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: ' <img class="characters-next-button"src="./src/img/prev.png" alt="">',
      prevArrow:' <img class="characters-prev-button" src="./src/img/prev.png" alt="">',
      asNavFor: '.slider-for',
      centerMode: true,
      focusOnSelect: true,
      adaptiveHeight: true
    });
    $('.slider-for-show').slick({
    
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true
    });
    $('.slider-nav-show').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: ' <img class="show-next-button"src="./src/img/prev.png" alt="">',
      prevArrow:' <img class="show-prev-button" src="./src/img/prev.png" alt="">',
      asNavFor: '.slider-for-show',
      centerMode: true,
      focusOnSelect: true,
      adaptiveHeight: true
    });

});
