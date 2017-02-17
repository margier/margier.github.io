
$(document).ready(function() {

  var headerHeight = $('header').outerHeight();
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




});
