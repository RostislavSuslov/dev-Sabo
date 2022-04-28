jQuery(document).ready(function($) {
    $('[type="tel"]').mask('+00(000)000-00-00');
    $(".fancybox").fancybox();

    $('.nice_Select').niceSelect();

    AOS.init({

    });
    $('.nav-item').on('click', function() {
        console.log('sss')

        AOS.init({

        });
    })

    /*якоря*/
    $("#ancorLink").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });


    /*scroll to top*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });



    $(function() {
        $(".muve-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000");
            return false
        })
    })
    /**/

    var estado = 0,
        vw = $(window).width();
    $("#hamburger").click(function() {

        var delay_time = 0;
        $(this).toggleClass('open');
        $('#bg-menu-mobile').toggleClass('open');
        $('body').toggleClass('overflow-hidden')
        console.log(estado);

        if (estado === 0) {
            TweenMax.to($("#bg-menu-mobile"), 1, {
                x: -vw,
                ease: Expo.easeInOut
            });

            $("#bg-menu-mobile li").each(function() {
                TweenMax.to($(this), 1.2, {
                    x: -vw,
                    scaleX: 1,
                    delay: delay_time,
                    ease: Expo.easeInOut
                });
                delay_time += .04;
            });
            estado = 1;
        } else {
            estado = 0;
            TweenMax.to($("#bg-menu-mobile"), 1.2, {
                x: 0,
                ease: Expo.easeInOut
            });
            $("#bg-menu-mobile li").each(function() {
                TweenMax.to($(this), 1, {
                    x: 0,

                    delay: delay_time,
                    ease: Expo.easeInOut
                });
                delay_time += .02;
            });
        }
    });

if($('main.wrap_page.home').length){

    $('body').css("background", "none");
}


    document.querySelector('.right-move') ? creatParallax() : null;

    function creatParallax() {
        const box = document.querySelector('.right-move');
        window.addEventListener('scroll', () => {
            const rate = window.pageYOffset;
            box.style.transform = `translateX(${rate}px)`;
            //box1.style.transform = `translateX(${rate * 2}px)`;
        })
    }


    var $statusReview = $('.pagingInfo');
    var $slickReview = $('.slider-review');

    $slickReview.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $statusReview.text(i + '/' + slick.slideCount);
    });


    $slickReview.slick({
        infinite: true,
        slidesToShow: 2,
        speed: 1000,
        slidesToScroll: 1,
        appendArrows: ".container-arrows",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }


        ]
    });




    var $status = $('.warehouse__pagingInfo');
    var $slickwarehouse = $('.warehouse__slider');

    $slickwarehouse.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $('.warehouse__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: ".container-arrows",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });
})