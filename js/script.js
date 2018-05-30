// How To use JQuery

/*=================================
|   |   |   | Preloader
=====================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*=================================
|   |   |   | Team
=====================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*=================================
|   |   |   | Progress Bars
=====================================*/
$(function () {

    $("#progress-elementes").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });

        this.destroy()
    }, {
        offset: "bottom-in-view"
    });

});

/*=================================
|   |   |   | Responsive Tabs
=====================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/*=================================
|   |   |   | Portfolio
=====================================*/

$(window).on('load', function(){
   
    //Initialize Isotope
    $("#isotope-container").isotope({
       //options 
    });
    
    //filter items on buttons clicked
    $("#isotope-filters").on('click','button', function() {
        
        // get filter value
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({ filter: filterValue });
    });
    
    // active button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
});

/*=================================
|   |   |   | Magnifire
=====================================*/

$(function() {
   
  $('#portfolio-wrapper').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
      gallery: { enabled: true }
  // other options
});
});

/*=================================
|   |   |   | Test Imonials
=====================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/*=================================
|   |   |   | Stats
=====================================*/
$(function() {
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    })
})


