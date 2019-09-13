
 // ----------------------- HEADER JS --------------------------- //
 // add class fixed for menu when scroll
 // show menu when scroll up, hide menu when scroll down
$(function() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {

        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollpos) {
            document.getElementById("mainNav").style.top = "0";

            if (currentScrollPos > 200) {
                $('.header-fix').addClass('fix');
            }

            if (currentScrollPos > 400) {
                document.getElementById("mainNav").style.top = "-150px";
            }

        } else {
            document.getElementById("mainNav").style.top = "0px";
            if (prevScrollpos < 100) {
                $('.header-fix').removeClass('fix');
            }

        }

        prevScrollpos = currentScrollPos;
    }

});

// ----------------------- ADD FORM PAY --------------------------- //
$(function() {
    $(".show-info").click(function() {
        $('.st-2').addClass('show-info-plus');
        return false;
    });
    $(".btn-finalpay").click(function() {
        $('.st-2').removeClass('show-info-plus');
        return false;
    });
    $(".close-pay").click(function() {
        $('.st-2').removeClass('show-info-plus');
        return false;
    });
    
});
// ----------------------- BACK TOP --------------------------- //
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });


    $('.back-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

});


// ----------------------- PRELOADER --------------------------- //

$(window).on('load', function() {
    $('.preloader').delay(10000).fadeOut(10000);
});

$(function() {
    $(".icon-menu-phone").click(function() {
        $('.menu-main').addClass('show-menumb');
        return false;
    });
    $(".icon-menu-close").click(function() {
        $('.menu-main').removeClass('show-menumb');
        return false;
    });


});

// ----------------------- ANIMATE --------------------------- //
$(document).ready(function() {
    $('[class *= "anima-"]').addClass('wow').attr('data-wow-duration', '1s');

    $('.anima-Fade-In-Left').addClass('fadeInLeft').attr('data-wow-delay', '0.5s');
    $('.anima-Fade-In-Right').addClass('fadeInRight').attr('data-wow-delay', '0.5s');
    $('.anima-Slide-In-Down').addClass('slideInDown').attr('data-wow-delay', '0.5s');
    $('.anima-Slide-In-Left').addClass('slideInLeft').attr('data-wow-delay', '0.5s');
    $('.anima-Slide-In-Right').addClass('slideInRight').attr('data-wow-delay', '0.5s');

    /*Fade In Up and Other Delay*/
    $('.anima-Fade-In-Up').addClass('fadeInUp').attr('data-wow-delay', '0.2s');
    $('.anima-Fade-In-Up-2').addClass('fadeInUp').attr('data-wow-delay', '0.4s');
    $('.anima-Fade-In-Up-3').addClass('fadeInUp').attr('data-wow-delay', '0.6s');
    $('.anima-Fade-In-Up-4').addClass('fadeInUp').attr('data-wow-delay', '0.8s');

    /*Fade In and Other Delay*/
    $('.anima-Fade-In').addClass('fadeIn').attr('data-wow-delay', '0.2s');
    $('.anima-Fade-In-2').addClass('fadeIn').attr('data-wow-delay', '0.4s');
    $('.anima-Fade-In-3').addClass('fadeIn').attr('data-wow-delay', '0.6s');
    $('.anima-Fade-In-4').addClass('fadeIn').attr('data-wow-delay', '0.8s');
    $('.anima-Fade-In-5').addClass('fadeIn').attr('data-wow-delay', '0.10s');

    /*Zoom In and Other Delay*/
    $('.anima-Zoom-In').addClass('zoomIn').attr('data-wow-delay', '0.2s');
    $('.anima-Zoom-In-2').addClass('zoomIn').attr('data-wow-delay', '0.4s');
    $('.anima-Zoom-In-3').addClass('zoomIn').attr('data-wow-delay', '0.6s');
    $('.anima-Zoom-In-4').addClass('zoomIn').attr('data-wow-delay', '0.8s');

    /*Bounce and Other Delay*/
    $('.anima-bounce').addClass('bounce').attr('data-wow-delay', '0.2s');
    $('.anima-bounce-2').addClass('bounce').attr('data-wow-delay', '0.4s');
    $('.anima-bounce-3').addClass('bounce').attr('data-wow-delay', '0.6s');
    $('.anima-bounce-4').addClass('bounce').attr('data-wow-delay', '0.8s');
});


// ----------------------- CAROUSEL CUSTOM --------------------------- //
$(document).ready(function() {
    $('#carousel01').owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            960: {
                items: 5,
                nav: true,
                loop: true,
                margin: 20,
            }
        }
    })
})

$(document).ready(function() {
    $('#carousel02').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 10
            }
        }
    })
})

// ----------------------- COUNT NUMBER RESULT --------------------------- //


$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 10);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});


$(document).ready(function() {
    $('.gioithieu').click(function() {
        $('html,body').animate({
            scrollTop: $("#gioithieu").offset().top}, 500);
        return false;
    });
      $('.sanpham1').click(function() {
        $('html,body').animate({
            scrollTop: $("#sanpham").offset().top}, 500);
        return false;
    });
        $('.huongdan1').click(function() {
        $('html, body').animate({
            scrollTop: $("#huongdan").offset().top}, 500);
        return false;
    });
          $('.boithuong1').click(function() {
        $('html, body').animate({
            scrollTop: $("#boithuong").offset().top}, 500);
        return false;
    });
});




