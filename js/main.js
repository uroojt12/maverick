$(document).ready(function() {
    // _____popup_____*/
    $(document).on("click", ".popBtn", function() {
        var popUp = $(this).data("popup");
        $("body").addClass("flow");
        $(".popup[data-popup= " + popUp + "]").fadeIn();
    });
    $(document).on("click", ".crosBtn", function() {
        $(".popup").fadeOut();
        $("body").removeClass("flow");
    });
    /*========== Toggle ==========*/
    $(document).on("click", ".toggle", function() {
        $(".toggle").toggleClass("active");
        $("body").toggleClass("flow");
        $("[nav]").toggleClass("active");
        $(".upperlay").toggleClass("active");
        // $("nav > ul > li > .sub").slideUp();
    });
    w = $(window).width();
    if (w <= 992) {
        $(document).on("click", "nav ul > li > a", function(e) {
            $(".toggle").removeClass("active");
            $("body").removeClass("flow");
            $("[nav]").removeClass("active");
            $(".upperlay").removeClass("active");
        });
    }

    // scrolling
    $(document).on("click", "nav ul > li > a", function(e) {
        e.preventDefault();
        $span = $(this);
        $(".toggle").removeClass("active");
        $("nav").removeClass("active");
        let hash = $(this).attr("href");
        $("html, body").animate({
                scrollTop: $(hash).offset().top - 10,
            },
            100
        );
    });
    /*____ FAQ's ____*/
    $(document).on("click", ".faqBlk > h5", function() {
        $(".faqBlk")
            .not($(this).parent().toggleClass("active"))
            .removeClass("active");
        $(".faqBlk > .txt")
            .not($(this).parent().children(".txt").slideToggle())
            .slideUp();
    });
    $(".banner-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        navText: [
            '<i class="fa-solid fa-circle-chevron-left"></i>',
            '<i class="fa-solid fa-circle-chevron-right"></i>',
        ],
        // navText: [ 'prev', 'next' ],
        dots: true,
        loop: true,
        autoWidth: false,
        autoHeight: true,
        smartSpeed: 1000,
        autoplayTimeout: 10000,
        margin: 20,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoHeight: true,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
            },
            991: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
    // =================owl===========
    $(".testi-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        navText: [
            '<i class="fa-solid fa-circle-chevron-left"></i>',
            '<i class="fa-solid fa-circle-chevron-right"></i>',
        ],
        // navText: [ 'prev', 'next' ],
        dots: true,
        loop: true,
        autoWidth: false,
        autoHeight: true,
        smartSpeed: 1000,
        autoplayTimeout: 10000,
        margin: 20,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoHeight: true,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
            },
            991: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    });
    // =================owl===========
    $(".skill-carousel").owlCarousel({
        autoplay: true,
        nav: true,
        navText: [
            '<i class="fa-solid fa-circle-chevron-left"></i>',
            '<i class="fa-solid fa-circle-chevron-right"></i>',
        ],
        // navText: [ 'prev', 'next' ],
        dots: false,
        loop: true,
        autoWidth: false,
        autoHeight: true,
        smartSpeed: 1000,
        autoplayTimeout: 10000,
        margin: 15,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoHeight: true,
                dots: false,
                nav: true,
            },
            600: {
                items: 2,
            },
            991: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });
    // ==============datepicker============
    $('.datepicker').datepicker({
        dateFormat: 'MM dd, yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:2060'
    });

});