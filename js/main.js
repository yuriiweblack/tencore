$(function(){
    

    $('.slider-blog__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings:{
                    arrows: false
                }
            },
        ]
    });

    $('.menu__btn').on('click', function(){

        // $('.menu__list').toggleClass('menu__list--active');
        $('.header__top-inner').toggleClass('header__top-inner--active');
    
    });


});
