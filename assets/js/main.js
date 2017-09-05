$(document).ready(function() {
  $(window).resize(function(){
    if (screen.width>=320) {
      $('#myName').removeClass('display-1').addClass('h1');
      $('#iAm').removeClass('h1').addClass('h3');
    }
    if (screen.width>=768) {
      $('#myName').removeClass('h1').addClass('display-1');
      $('#iAm').removeClass('h3').addClass('h1');
    }
  });
  if (screen.width>=320) {
      $('#myName').removeClass('display-1').addClass('h1');
      $('#iAm').removeClass('h1').addClass('h3');
    }
    if (screen.width>=768) {
      $('#myName').removeClass('h1').addClass('display-1');
      $('#iAm').removeClass('h3').addClass('h1');
    }
});