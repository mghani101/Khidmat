/*
Function to handle resizing the navigation bar when the page is scrolled.
*/
$(function () {
  $(document).scroll(function () {
	  var $nav = $("#top-nav");
    var $navImg = $(".logo-img");
    var $navLink = $(".navbar-main");
    var $navImgSrc = $(".logo-src");
	  $nav.toggleClass('smaller', $(this).scrollTop() > $nav.height());
    $navImg.toggleClass('smaller', $(this).scrollTop() > $nav.height());
    $navLink.toggleClass('smaller', $(this).scrollTop() > $nav.height());
    $navImgSrc.toggleClass('smaller', $(this).scrollTop() > $nav.height());

    if ($(this).scrollTop() > $nav.height()) {
      $(".logo-src").addClass("logo-src-small");
    }
    else {
      $(".logo-src").removeClass("logo-src-small");
    }
	});
});

/*
Function to handle the scroll when link is clicked
*/
$(".page-link").on("click", function() {
  var page = $(this).attr('href');

  $('html, body').animate({
     scrollTop: $(page).offset().top-75 }, 500);
});
