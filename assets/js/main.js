$(document).ready(function() {

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
          });
        }
      }
    });

  // Automatic close the navigation bar
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });

});

// Form validation
$("#needs-validation").validate({
  errorClass: "form-control-invalid",
  rules: {
    name: "required",
    email: "required",
    message: "required",
  },
  messages: {
    name: "Escribe tu nombre",
    email: "Ingresa tu correo",
    message: "Escribe tu comentario",
  },
  submitHandler: function (form) {
    swal({
      title: "¡Tu mensaje sera enviado!",
      text: "Pronto me pondré en contacto.",
      type: "success",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: "Entendido",
      confirmButtonClass: 'btn btn-success'
    }).then(function () {
       form.submit();
    });
  }
});