$(document).ready(function(){
        
    let burger = $('#burger');
    let navbar = $('.navbar');
    let callme = $('.callme');
    
/** start slick carousel **/

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
  ]
});
    
/** end slick carousel **/
    
/** start Скрытие/отображение навигационной строки при экране 768px **/
    
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
    
/** end Скрытие/отображение навигационной строки при экране 768px **/
    
/** start Popup **/
//создание "класса"
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
//создание объекта    
    let p = new Popup({
        modal: '.modal',
        overlay: '.overlay'
    });
    
    callme.on('click', function(){
        let form = document.querySelector('.for-callme-popup');
        p.modal.style.backgroundColor = '#fff';
        p.open(form.innerHTML);
    });
    
    // чтобы дотянуться до элементов popup, идем через document
    $(document).on("click", ".close-popup", function(event){
        p.close();
        });
    
    $(document).on("click", ".write-consul", function(event){
        let fioPopup = $('#fio-popup');
        let phonePopup = $('#phone-popup');
        let messagePopup = document.querySelector('.message-popup');
        let fioValue = $('#fio-popup').val();
        let phoneValue = $('#phone-popup').val();

        fioValue = $.trim(fioValue);
        phoneValue = $.trim(phoneValue);
        
        console.log(fioValue);
        console.log(phoneValue);
        
        messagePopup.innerHTML = "";
        
        if(fioPopup.val() == ''){
            messagePopup.innerHTML += "Укажите ФИО! "; 
        }
        if(phonePopup.val() == ''){
            messagePopup.innerHTML += "Укажите телефон! ";
            phonePopup.attr("placeholder", "+7(___)___-__-__");
        }
        if((fioPopup.val() !== '') && (phonePopup.val() !== '')){
            let form = document.querySelector('.success-popup');
            p.modal.style.backgroundColor = '#0384d8';
            p.open(form.innerHTML);
        }
        

        
        

        });
});
/** end Popup **/







