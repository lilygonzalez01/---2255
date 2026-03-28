$(document).ready(function () {
  $(".one-post").hover(
    function (event) {
      $(event.currentTarget)
        .find(".one-post-shadow")
        .animate({ opacity: "0.2" }, 250);
    },
    function (event) {
      $(event.currentTarget)
        .find(".one-post-shadow")
        .animate({ opacity: "0" }, 250);
    },
  );

  var logoImg = $(".header img");
  var originalWidth = logoImg.width();
  var originalHeight = logoImg.height();

  logoImg.hover(
    function () {
      $(this).animate(
        { width: originalWidth + 30, height: originalHeight + 30 },
        250,
      );
    },
    function () {
      $(this).animate({ width: originalWidth, height: originalHeight }, 250);
    },
  );
});
