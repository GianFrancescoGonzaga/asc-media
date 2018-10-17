$(document).ready(function(){
    $('.city-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $(window).scroll(function (e) {
        parallax();
      });

      function parallax() {
        var scrolled = $(window).scrollTop();
        $('.hero').css('top', -(scrolled * 0.0315) + 'rem');
        $('.hero > h1').css('top', -(scrolled * -0.005) + 'rem');
        $('.hero > h1').css('opacity', 1 - (scrolled * .00200));
      };

      $("#fakeLoader").fakeLoader({
        timeToHide: 1200,
        bgColor: "#0069D9",
        spinner: "spinner5"
      });

      setTimeout(() => {
        document.querySelector(".content").style.zIndex = "1000"
        // document.querySelector(".heading").style.display = "block"
        // document.querySelector(".heading").classList.add('slide-in-blurred-top');
      }, 1600);

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
});