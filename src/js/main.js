/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

//= ../../node_modules/slick-carousel/slick/slick.js

//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

var screenwidth = screen.width;


console.log(screenwidth)

// $(function(){
//     if(screenwidth < 768) {
//     $('#btn-open').click(function() {
//         $('.menu__hiden').animate({
//             left: '0px'
//         }, 200);
//     })
//     }
// })

$(function(){
    if(screenwidth < 768) {
        $(document).on('click','#hidden_close',function() {
            $('.menu__hiden').animate({
                left: '-285px'
            }, 200);
            $('.modal-overlay').removeClass('active');
        });

        $('.btn-open').click(function() {
            $('.menu__hiden').animate({
                left: '0px'
            }, 200);
            $('.modal-overlay').addClass('active');
        });
        
        $(document).on('click','.modal-overlay', function() {
             $('.menu__hiden').animate({
                left: '-285px'
            }, 200);
            $('.modal-overlay').removeClass('active');
        });
    }
})


$(function() {
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

// var main = function(){
//     $('#btn-open').click(function() {
//         $('.menu__hiden').animate({
//             left: '0px'
//         }, 200);
//     })
// }

/*
 * Custom
 */
//= partials/app.js