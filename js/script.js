// How To use JQuery

/*=================================
|   |   |   | Preloader
=====================================*/
$(window).on('load', function() {
   $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});