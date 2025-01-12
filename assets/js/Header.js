$(window).on('scroll', function () {
    if ($('.scroll-to-top').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.scroll-to-top').fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.scroll-to-top').fadeOut(500);
        }
    }
    if ($('.stricked-menu').length) {
        var headerScrollPos = 100;
        var stricky = $('.stricked-menu');
        if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass('stricky-fixed');
        } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass('stricky-fixed');
        }
    }
});


if ($('.main-navigation .navigation-box .submenu').length) {
    var subMenu = $('.main-navigation .submenu');
    subMenu.parent('li').children('a').append(function () {
        return '<button class="sub-nav-toggler"><i class="fa fa-angle-down icon-bar"></i></button>';
    });
    var mainNavToggler = $('.header-navigation .menu-toggler');
    var subNavToggler = $('.main-navigation .sub-nav-toggler');
    mainNavToggler.on('click', function () {
        var Self = $(this);
        var menu = Self.closest('.header-navigation').find(Self.data('target'));
        $(menu).slideToggle();
        $(menu).toggleClass('showen');
        return false;
    });
    subNavToggler.on('click', function () {
        var Self = $(this);
        Self.parent().parent().children('.submenu').slideToggle();
        return false;
    });
}

if ($('.stricky').length) {
    $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
}
