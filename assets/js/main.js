jQuery(function($) {

  // AOS animation
  AOS.init({
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    duration: 1000,
  });

  // swiper slider
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 5000,
    },
  })

  // smooth scrolling
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    // もしもヘッダーの高さを計算する場合は下記、IDの部分はheaderに付けたもの
    // var position = target.offset().top  - $('#js-header').outerHeight();
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  // burger menu for mobile
  $("#header-hamburger").on("click", function () {
    $("#header").toggleClass( 'header-active' );

    if ($("body").hasClass("scroll-lock")) {
      $("body").removeClass("scroll-lock");
    } else {
      $("body").addClass("scroll-lock");
    }
  });

  $(".header__nav-link-item").on("click", function () {
    $("#header").removeClass("header-active");
    $("body").removeClass("scroll-lock");
  });
});
