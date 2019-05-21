$(document).ready(() => {
  const navbar = $("#navbar");
  const navbarHeight = navbar.outerHeight();
  let anchors = $(".anchor");

  function addActive(ele) {
    let navItem;
    navbar.find(".active").removeClass("active");
    navItem = navbar.find('a[href="#' + ele + '"]');
    navItem.addClass("active");
  }

  $(document).scroll(() => {
    let position = $(document).scrollTop();
    let scrollPos = Math.floor(position + $(window).height());
    let current;

    // detach navbar on scroll
    if (position > 100) {
      navbar.addClass("navigation--scroll");
    } else {
      if (navbar.hasClass("navigation--scroll")) {
        navbar.removeClass("navigation--scroll");
      }
    }

    // set active nav item on scroll
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].offsetTop - navbarHeight <= position) {
        current = anchors[i].id;
      }
    }

    // if window is scrolled to the bottom, make last section active
    if (
      scrollPos == $(document).height() ||
      scrollPos + 1 == $(document).height() ||
      scrollPos - 1 == $(document).height()
    ) {
      current = "contact";
    }

    addActive(current);
  });
});
