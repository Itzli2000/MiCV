$(document).ready(function() {

  // Active class for menu
  (function($) {
    $("#mainNav li a").on("click", function(e) {
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

});




// JS form validation
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("needs-validation");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());