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
    this.innerHTML = `
        <div class="nav__button">
          <p class="nav__button__text">MENU</p>
          <span class="nav__button__icon nav__button__icon--1">&nbsp;</span>
          <span class="nav__button__icon nav__button__icon--2">&nbsp;</span>
        </div>

        <div class="nav__bg"></div>

        <nav class="nav__nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#top" class="nav__link">Home</a></li>
            <li class="nav__item">
              <a href="#about-me" class="nav__link" id="menu__about">About</a>
            </li>
            <li class="nav__item">
              <a href="/pages/portfolio.html" class="nav__link">Portfolio</a>
            </li>
            <li class="nav__item">
              <a href="/pages/experience.html" class="nav__link">Experience</a>
            </li>
          </ul>
        </nav>
    `;
  }
}

customElements.define('nav-comp', Nav);

// Nav js

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
