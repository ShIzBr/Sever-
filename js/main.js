$(document).ready(function(){
        
    let burger = $('#burger');
    let navbar = $('.navbar');
        
    $('.carousel-wrapper').slick({
  dots: true,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  autoplay: true,
  pauseOnFocus: false,
  pauseOnHover: false,            
  speed: 500,
  fade: true,
  cssEase: 'linear',
  dotsClass: 'dots'            
});
    
    if($(window).width() < 768){
        navbar.addClass("hide");
    }

    burger.on('click',function(){
        console.log($(window).width());
        if (navbar.hasClass("hide")){
            navbar.removeClass("hide");
            navbar.addClass("show");
        }
        else{
            navbar.addClass("hide");
            navbar.removeClass("show");
        }
        
    });
        
      
    
    
        
});
