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
    
    $('.girls-section-item-detail').click(function(event){
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
         $('body,html').animate({scrollTop: top}, 1500);

   });








});