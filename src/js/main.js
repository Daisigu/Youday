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
});