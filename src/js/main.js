$(function(){
    $('.header__slider').slick({
        arrows: false, /* убираем стрелочки */
        vertical: true, /* вертикальная смена слайдов */
        dots: true, /* включает точки-индикаторы */
        dotsClass: 'header-dots', /* свой стиль для индикаторов */
        autoplay: 2000 /* автоматическая смена слайдов */
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});