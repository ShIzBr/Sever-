$(document).ready(function(){
        
    let burger = $('#burger');
    let navbar = $('.navbar');
    let callme = $('.callme');
    let closePopup = document.querySelector(".close-popup");

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
    
    $('.carouselDoctors').slick({
  
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>',      
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
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
        
    let p = new Popup({
        modal: '.modal',
        overlay: '.overlay'
    });
    
    callme.on('click', function(){
        let form = document.querySelector('.for-callme-popup');
        p.open(form.innerHTML);
    });
    
    
    
    //    обработчик событий не работает, потому что ваш элемент не существует во время оценки вашего обработчика событий.
    $(document).on("click", ".close-popup", function(event){
        p.close();
        });
    
    
    
  
});

// функции(классы) //

function Popup(options){
    this.modal = document.querySelector(options.modal);
    this.overlay = document.querySelector(options.overlay);
    
    var popup = this;
    
    this.open = function(content){
        popup.modal.innerHTML = content;
        popup.overlay.classList.add('open');
        popup.modal.classList.add('open');
    }
    
    this.close = function(){
        popup.overlay.classList.remove('open');
        popup.modal.classList.remove('open');
    }
    
    this.overlay.onclick = popup.close;
}




