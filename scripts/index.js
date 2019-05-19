$(document).ready(() => {
  const navbar = $("#navbar");
  let navItems = navbar.find("a.navigation__link");
  let sections = $(".section");

  $(document).scroll(() => {
    let position = $(document).scrollTop();
    let current, active;

    // detach navbar on scroll
    if (position > 100) {
      navbar.addClass("navigation--scroll");
    } else {
      if (navbar.hasClass("navigation--scroll")) {
        navbar.removeClass("navigation--scroll");
      }
    }

    // set active nav item on scroll
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= position) {
        current = sections[i].id;
      }
    }

    navbar.find(".active").removeClass("active");
    let navItem = navbar.find('a[href="#' + current + '"]');
    navItem.addClass("active");
  });
});
