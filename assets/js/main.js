$(document).ready(function() {

  // Detect browser
  function navegador(){
    var agente = window.navigator.userAgent;
    var navegadores = ["Chrome", "Firefox", "Safari", "Opera", "Trident", "MSIE", "Edge"];
    for(var i in navegadores){
      if(agente.indexOf( navegadores[i]) != -1 ){
        return navegadores[i];
      }
    }
  }
  alert(window.navigator.appCodeName);

  // Changes classes to banner
  $(window).resize(function(){
    if (screen.width>=320) {
      $('#myName').removeClass('display-1').addClass('h1');
      $('#iAm').removeClass('h1').addClass('h3');
      $('#mainAvatar').removeClass('avatarbig').addClass('avatar');
    }
    if (screen.width>=768) {
      $('#myName').removeClass('h1').addClass('display-1');
      $('#iAm').removeClass('h3').addClass('h1');
      $('#mainAvatar').removeClass('avatar').addClass('avatarbig');
    }
  });
  if (screen.width>=320) {
    $('#myName').removeClass('display-1').addClass('h1');
    $('#iAm').removeClass('h1').addClass('h3');
    $('#mainAvatar').removeClass('avatarbig').addClass('avatar');
  }
  if (screen.width>=768) {
    $('#myName').removeClass('h1').addClass('display-1');
    $('#iAm').removeClass('h3').addClass('h1');
    $('#mainAvatar').removeClass('avatar').addClass('avatarbig');
  }

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
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Automatic close the navigation bar
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });


  // Autoplay video icons
  var vid = document.getElementById("1vid"); 
  var vid1 = document.getElementById("2vid"); 
  var vid2 = document.getElementById("3vid"); 
  var vid3 = document.getElementById("4vid");
  var vid4 = document.getElementById("5vid");
  vid.load(); 
  vid1.load(); 
  vid2.load(); 
  vid3.load(); 
  vid4.load(); 
  $('#playbtn').click(function () {
    vid.play();
    vid1.play(); 
    vid2.play(); 
    vid3.play(); 
    vid4.play(); 
    $(this).hide(700);
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