$(document).ready(function() {
  $(".ui.button").click(function() {
    $('html, body').animate({
        scrollTop: $(".features.section").offset().top
    }, 1000);
});
});
