document.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("navigation--scroll");
  } else {
    if (navbar.classList.contains("navigation--scroll")) {
      navbar.classList.remove("navigation--scroll");
    }
  }
});
