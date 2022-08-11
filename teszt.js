jQuery(document).ready(function($) {
    $('.elementor-toggle .elementor-toggle-item .elementor-tab-title').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('elementor-active');
        $(this).next('.elementor-tab-content').toggleClass('elementor-active');
        return false;
    });
    $('.image-carousel .swiper-wrapper').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});