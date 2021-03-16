/***************************
 *
 *  JC PORTFOLIO
 *  Nav.js
 *
 ***************************/

// Reusable Nav component

class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fromMenu = new URLSearchParams(location.search).get('menu');
    let backgroundClass = 'nav__bg';
    let navClass = 'nav__nav';

    // Display the menu initially on page load if we've clicked a menu link
    // Provides a seamless menu nav experience
    if (fromMenu) {
      backgroundClass += ' nav__bg--active';
      navClass += ' nav__nav--active';
    }

    this.innerHTML = `
        <div class="nav__button">
          <p class="nav__button__text">MENU</p>
          <span class="nav__button__icon nav__button__icon--1">&nbsp;</span>
          <span class="nav__button__icon nav__button__icon--2">&nbsp;</span>
        </div>

        <div class="${backgroundClass}"></div>

        <nav class="${navClass}">
          <ul class="nav__list">
            <li class="nav__item" onClick=navigate("/index.html?menu=true#top")>
              Home
            </li>
            <li class="nav__item" onClick=navigate("/pages/portfolio.html?menu=true")>
              Portfolio
            </li>
            <li class="nav__item" onClick=navigate("/pages/experience.html?menu=true")>
              Experience
            </li>
            <li class="nav__item" onClick=navigate("/pages/experience.html?menu=true#contact")>
              Contact Me
            </li>
          </ul>
        </nav>
    `;
  }
}

customElements.define('nav-comp', Nav);

// Menu JS

const nav = document.querySelector('.nav__nav');
const navBG = document.querySelector('.nav__bg');
const navButton = document.querySelector('.nav__button');
const navText = document.querySelector('.nav__button__text');
const navIcon1 = document.querySelector('.nav__button__icon--1');
const navIcon2 = document.querySelector('.nav__button__icon--2');

navButton.addEventListener('mouseenter', (event) => {
  if (!nav.classList.contains('nav__nav--active')) {
    navText.classList.add('nav__button__text--hover');
    navIcon1.classList.add('nav__button__icon--1--hover');
    navIcon2.classList.add('nav__button__icon--2--hover');
  }
});

navButton.addEventListener('mouseleave', (event) => {
  if (!nav.classList.contains('nav__nav--active')) {
    navText.classList.remove('nav__button__text--hover');
    navIcon1.classList.remove('nav__button__icon--1--hover');
    navIcon2.classList.remove('nav__button__icon--2--hover');
  }
});

navButton.addEventListener('click', (event) => {
  navBG.classList.toggle('nav__bg--active');
  nav.classList.toggle('nav__nav--active');
  navText.classList.remove('nav__button__text--hover');
  navIcon1.classList.toggle('nav__button__icon--1--cross');
  navIcon2.classList.toggle('nav__button__icon--2--cross');
});

// Page navigation JS

const navigate = (page) => {
  window.location.assign(page);

  // If this code executes, location has not changed.
  // onLoad will not fire, so clear nav elements here.
  nav.classList.remove('nav__nav--active');
  navBG.classList.remove('nav__bg--active');
  navIcon1.classList.remove('nav__button__icon--1--cross');
  navIcon2.classList.remove('nav__button__icon--2--cross');
  navIcon1.classList.remove('nav__button__icon--1--hover');
  navIcon2.classList.remove('nav__button__icon--2--hover');
};

// Clear the nav when the page loads to handle occasions where
// we've come from a menu click. Provides seamless page navs.
window.onload = () => {
  nav.classList.remove('nav__nav--active');
  navBG.classList.remove('nav__bg--active');
};
