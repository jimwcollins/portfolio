/***************************
 *
 *  JC PORTFOLIO
 *  Header.js
 *
 ***************************/

// Reusable Header component

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <img
          src="/img/General/Header_logo.png"
          alt="James Collins Logo"
          class="header__image"
        />
    `;
  }
}

customElements.define('header-comp', Header);

// Javascript for sticky header

const heroSection = document.querySelector('.hero');
const header = document.querySelector('.header');

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add('header--scroll');
    navButton.classList.add('nav__button--scroll');
  } else {
    header.classList.remove('header--scroll');
    navButton.classList.remove('nav__button--scroll');
  }
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(heroSection);
