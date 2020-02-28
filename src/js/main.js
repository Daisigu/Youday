$(document).ready(function(){
   $('.header__burger').click(function(event){
    $('.header__burger,.main-header__list').toggleClass('active');
   });


   $('.slider').slick({
      autoplay: false,
      autoplaySpeed: 4000,
      nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    });   

    $('.l-slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


    
    $('.animators-section-item-detail').click(function(event){
       $(this).toggleClass('active').next().slideToggle(300);
    });  

      $("#menu").on("click","a", function (event) {
         //отменяем стандартную обработку нажатия по ссылке
         event.preventDefault();
   
         //забираем идентификатор бока с атрибута href
         var id  = $(this).attr('href'),
   
         //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
         //анимируем переход на расстояние - top за 1500 мс
         $('body,html').animate({scrollTop: top}, 1000);

   });

$('.header__burger').click(function(event){
   $('.header-menu').toggleClass('active');
});







});