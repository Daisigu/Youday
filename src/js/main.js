$(document).ready(function(){
   $('.header__burger').click(function(event){
    $('.header__burger,.main-header__list').toggleClass('active');
   });


   $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    });   
    
    $('.main-footer__ul__title').click(function(event){
       $(this).toggleClass('active').nextAll('.main-footer__item').slideToggle(300);
    });  
});