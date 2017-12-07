$(document).ready(function() {

  // Active class for menu
  (function($) {
    $("#mainNav a").on("click", function(e) {
        e.preventDefault();
        $("#mainNav li a").removeClass("active");
        $(this).addClass("active");
      });
  })(jQuery);

  // Smooth scroll for menu anchors
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
      var target = $(this.hash);
      var navHeight = $('#mainNav').height();
      var scrollToPosition = target.offset().top - (navHeight);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: scrollToPosition
          }, 1500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
          });
        }
      }
    });

  // Automatic close the navigation bar
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });

  // Animate progress bar
  var $bars = $(".progress-bar");
  $bars.eq(0).animate({width: "85%"}, 1500);
  $bars.eq(1).animate({width: "80%"}, 1500);
  $bars.eq(2).animate({width: "60%"}, 1500);
  $bars.eq(3).animate({width: "50%"}, 1500);
  $bars.eq(4).animate({width: "80%"}, 1500);
  $bars.eq(5).animate({width: "50%"}, 1500);

});