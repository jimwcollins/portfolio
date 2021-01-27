/***************************
 *
 *  JC PORTFOLIO
 *  Hero.js
 *
 ***************************/

// Reusable Hero component

class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero">
        <img
          src=${this.getAttribute('image')}
          alt=${this.getAttribute('imageAlt')}
          class="hero__image"
        />

        <div class="hero__heading">
          <div class="hero__box">
            <p class="hero__symbol--${this.getAttribute('page')}">{</p>
            <p class="hero__text">${this.getAttribute('title')}</p>
            <p class="hero__symbol--${this.getAttribute('page')}">}</p>
          </div>
        </div>

        <div class="hero__arrow">
          <svg class="hero__arrow__svg">
            <use
              xlink:href="/img/portfolio-icons-sprite.svg#icon-chevron-thin-down"
            ></use>
          </svg>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-comp', Hero);
