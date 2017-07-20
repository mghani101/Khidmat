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


/*
Function to handle the tabs in the services area
*/

(function() {

  'use strict';

  /**
   * tabs
   *
   * @description The Tabs component.
   * @param {Object} options The options hash
   */
  var tabs = function(options) {

    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
    var activeIndex = 0;
    var initCalled = false;

    /**
     * init
     *
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */
    var init = function() {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove('no-js');

        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          handleClick(link, i);
        }
      }
    };

    /**
     * handleClick
     *
     * @description Handles click event listeners on each of the links in the
     *   tab navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */
    var handleClick = function(link, index) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        goToTab(index);
      });
    };

    /**
     * goToTab
     *
     * @description Goes to a specific tab based on index. Returns nothing.
     * @param {Number} index The index of the tab to go to
     */
    var goToTab = function(index) {
      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
        tabNavigationLinks[activeIndex].classList.remove('is-active');
        tabNavigationLinks[index].classList.add('is-active');
        tabContentContainers[activeIndex].classList.remove('is-active');
        tabContentContainers[index].classList.add('is-active');
        activeIndex = index;
      }
    };

    /**
     * Returns init and goToTab
     */
    return {
      init: init,
      goToTab: goToTab
    };

  };

  /**
   * Attach to global namespace
   */
  window.tabs = tabs;

})();
