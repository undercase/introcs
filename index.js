$(document).ready(function() {
  $(".ui.button").click(function() {
    $('html, body').animate({
        scrollTop: $(".features.section").offset().top
    }, 1000);
  });
  $('.row').visibility({
    onBottomVisible: function(calculations) {
      $(this).transition('scale');
    }
  });
  $('.steps .aspect').hover(function() {
    $(this).children('pre').stop().slideDown();
  }, function() {
    $(this).children('pre').stop().slideUp();
  });
});
