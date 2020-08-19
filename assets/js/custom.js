$(function () {
  var header = $(".scroller-link");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
      header.removeClass("nav-anchor").addClass("scroll-nav-anchor");
      // header.removeClass('active-menu').addClass("scroll-active-menu");
    } else {
      header.removeClass("scroll-nav-anchor").addClass("nav-anchor");
      // header.removeClass('scroll-active-menu').addClass("active-menu");
    }
  });
});

$(function () {
  var header = $("#bars");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
      header.removeClass("text-white").addClass("text-black");
    } else {
      header.removeClass("text-black").addClass("text-white");
    }
  });
});
