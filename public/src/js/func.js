jQuery(document).ready( function($){

    // Resize Header on scroll 
    $(document).on("scroll", function(){
        $header = $('.header');
        if ( $(document).scrollTop() > 40 ){
          $header.addClass("active");
        }else{
          $header.removeClass("active");
        }
    });

    $('.header__navigation-icon').on('click', function() {
      $('.header__navigation-list').toggleClass('active');
    });


    // Scroll to Section
    $('.header__navigation-link').mPageScroll2id({
        highlightSelector : ".header__navigation-link", 
        offset: 140, 
        clickedClass: "clicked", 
        highlightClass: 'active'
    });	

    // Parallax Bilder
    $('.parallax__image').parallax({
      position: 'center top'
    });

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