$(function () {
    $(window).on('scroll', function () {
        scroll = $(window).scrollTop();
        if (scroll >= 250) {
            $(".header").addClass("header_change");
            $(".hamburger-menu").addClass("scroll-action");
        } else {
            $(".header").removeClass("header_change");
            $(".hamburger-menu").removeClass("scroll-action");
        }
    });
    $(".hamburger-menu").on('click', function () {
        $(".hamburger-menu").toggleClass("active");
        $(".header__navigation").toggleClass("open");
    });
});