
$(document).ready(function() {

  var headerHeight = $('nav').outerHeight();
  // console.log(headerHeight);


  $('.slide-section').on('click',function(e) {

    var linkHref = $(this).attr('href');
    // scroll down and show hash
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);
    e.preventDefault();
    // console.log(linkHref);
    });

    // this code makes the hamburger menu close when option clicked
    $('.navbar-nav > li > a').on('click', function() {
        $('.navbar-toggle').trigger('click');
      });
      

});
