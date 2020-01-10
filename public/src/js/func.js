jQuery(document).ready( function($){

    // Dropdown Menu einblenden
    $('.header__navigation-item').hover(function(e){
        var $this   = $(this);    
        var $speed  = 700;

        if( $this.hasClass('active') ) {
            $this
                .removeClass('active')
                .fadeOut($speed); 
        }else {
            $(this)
                .hasClass('has-child-items')
                .find('.header__navigation-dropdown')
                .fadeIn($speed)
                .addClass('active');
        }
    })

    // Home Slider 
    var swiper = new Swiper('.slider__container', {
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});