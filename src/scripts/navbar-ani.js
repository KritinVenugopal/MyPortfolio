$(document).ready(function () {

    // Function to change the nav-bar on scroll
    $(window).scroll(function () {
        ($(window).scrollTop() >= 100) ? (
            $('.fixed-nav-bar').addClass('scrolled'),
            $('.the-bass').addClass('scrolled')
        ) : (
            $('.fixed-nav-bar').removeClass('scrolled'),
            $('.the-bass').removeClass('scrolled')
        );
    });

    // Drop Down Function
    $('#menuButton').on('change', function () {
        ($('#menuButton').is(':checked')) ? (
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });

    // Close menu when item is clicked
    $('.drop-down-item').on('click', function () {
        $('#menuButton').prop('checked', false);
        $('.the-bass').removeClass('dropped');
    });

});
