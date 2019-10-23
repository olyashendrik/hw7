$( function () {
    $("#tabs1").tabs();
    $("#tabs").tabs();
    $("#main-slider").slick({
        dots: true,
        infinite: true,
    });
    $('.section-open').on('click', function (e) {
        e.preventDefault();
        $('.section-open').parents('.section-bg').addClass('open');

    });
});