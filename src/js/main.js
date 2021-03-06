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
      swipe: false,
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
    $('.special-show__slider-for').slick({
    
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      arrows: false,
      adaptiveHeight: true,
      
      
    });
    $('.special-show__slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: ' <img class="special-show-next-button"src="./src/img/prev.png" alt="">',
      prevArrow:' <img class="special-show-prev-button" src="./src/img/prev.png" alt="">',
      asNavFor: '.special-show__slider-for',
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
      swipe: false,
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
    $('.single-slick').slick({
      nextArrow: ' <img class="reviews-next-button"src="./src/img/prev.png" alt="">',
      prevArrow:' <img class="reviews-prev-button" src="./src/img/prev.png" alt="">',
    });

    $('.header__burger').click(function(e){
      $('.header__burger, .header__list').toggleClass('active');
      $('body').toggleClass('lock');
    });
    $(document).ready(function() {

      //E-mail Ajax Send
      $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
        }).done(function() {
          alert("Thank you!");
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
    
    });
});
