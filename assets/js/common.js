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
    $(".header__navigation--search_open_button").on('click', function () {
        $(".search-window").addClass("search-window__visible");
    });
    $(".search-window__close").on('click', function () {
        $(".search-window").removeClass("search-window__visible");
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest("search-window__form").length && $(e.target).closest("search-window").length) {
            $(".search-window").removeClass("search-window__visible");
        }
    });
});