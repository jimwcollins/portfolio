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
      <header
        <div class="header__logo">
          <div class="hero__box">
            <p class="hero__symbol--header">{</p>
            <p class="hero__text--header">James Collins</p>
            <p class="hero__symbol--header">}</p>
          </div>
        </div>
      </header>
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
