// highlight current tab
const mainNav = document.querySelectorAll(".main-nav");

const activeLink = (() => {
  mainNav.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.toggle("active");
    }
  });
})();
