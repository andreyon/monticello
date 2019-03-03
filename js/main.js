;(function ($) {
    'use strict';
    $(function () {
        $('.slider').slick({
            infinite: true,
            slide: 'div',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            autoplaySpeed: 2000,
            //focusOnSelect: true,//слайдится при клике
            // centerMode: true,
            prevArrow: '.slider-prev',
            nextArrow: '.slider-next',
            // centerPadding: '100px',//расстояние на которое вылазиет след слайд
        });
    })
})(jQuery);


function initMap() {
    // The location of Uluru
    var uluru = {lat: 49.9323562, lng: 36.4106879};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}
