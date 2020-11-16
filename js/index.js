/***************************
 *
 *  JC PORTFOLIO
 *  index.js
 *
 ***************************/

/**************
 * Site-wide JS
 **************/

// Header

const heroSection = document.querySelector('.hero');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav__link');

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add('header--scroll');
    navLinks.forEach((navLink) => {
      item.classList.add('nav__link--scroll');
    });
  } else {
    header.classList.remove('header--scroll');
    navLinks.forEach((navLink) => {
      item.classList.add('nav__link--scroll');
    });
  }
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(heroSection);
