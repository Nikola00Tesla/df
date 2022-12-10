$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-men--close');
    });
    $('.rightside-menu__close').on('click', function (){
        $('.rightside-menu').addClass('rightside-men--close'); 
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    var mixer = mixitup('.gallery__inner',{
        load:{
            filter: '.living'
        }
    });
})
