$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);//скорость прокрутки
                return false;
            }
        }
    });
  
  
  $('.characters__slider-for').slick({
    
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      
      
    });
    $('.characters__slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: ' <img class="characters-next-button"src="./src/img/prev.png" alt="">',
      prevArrow:' <img class="characters-prev-button" src="./src/img/prev.png" alt="">',
      asNavFor: '.characters__slider-for',
      centerMode: true,
      focusOnSelect: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
          },
        ]
    });
    $('.show__slider-for').slick({
    
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true
    });
    $('.show__slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: ' <img class="show-next-button"src="./src/img/prev.png" alt="">',
      prevArrow:' <img class="show-prev-button" src="./src/img/prev.png" alt="">',
      asNavFor: '.show__slider-for',
      centerMode: true,
      focusOnSelect: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
          },
        ]
    });

    $('.header__burger').click(function(e){
      $('.header__burger, .header__list').toggleClass('active');
      $('body').toggleClass('lock');
    });
});
