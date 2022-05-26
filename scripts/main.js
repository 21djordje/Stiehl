$(document).ready(function () {
  // Find all iframes
  var $iframes = $("iframe");

  // Find & save the aspect ratio for all iframes
  $iframes.each(function () {
    $(this)
      .data("ratio", this.height / this.width)
      // Remove the hardcoded width & height attributes
      .removeAttr("width")
      .removeAttr("height");
  });

  // Resize the iframes when the window is resized
  $(window)
    .resize(function () {
      $iframes.each(function () {
        // Get the parent container's width
        var width = $(this).parent().width();
        $(this)
          .width(width)
          .height(width * $(this).data("ratio"));
      });
      // Resize to fix all iframes on page load.
    })
    .resize();

  ("use strict");

  var c,
    currentScrollTop = 0,
    navbar = $(".navbar");

  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
  });
});
