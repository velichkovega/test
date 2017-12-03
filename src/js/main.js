/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

//= ../../node_modules/slick-carousel/slick/slick.js

//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

console.log('owlCarousel')

// $('.carusel__slick').owlCarousel({
//     center: true,
//     items:2,
//     loop:true,
//     margin:10,
//     responsive:{
//         600:{
//             items:4
//         }
//     }
// });

$(function() {
        console.log($(".carusel__slick"))
        $(".carusel__slick").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
            
            lazyLoad: 'progressive',
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {   
                    breakpoint: 655,
                    settings: {
                        slidesToShow: 3,    
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        })
    
})

var main = function(){
    $('#btn-open').click(function() {
        $('.menu__hiden').animate({
            left: '0px'
        }, 200);
    })
}

$(document).resize();
$(document).ready(main);

/*
 * Custom
 */
//= partials/app.js