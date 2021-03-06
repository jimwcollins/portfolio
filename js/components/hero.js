/***************************
 *
 *  JC PORTFOLIO
 *  Hero.js
 *
 ***************************/

// Reusable Hero component

class Hero extends HTMLElement {
  connectedCallback() {
    if (this.getAttribute('page') === true) {
      this.splitTitle = 'splitTitle';
    }

    this.heroImg =
      this.getAttribute('position') === 'top' ? 'hero--top' : 'hero';

    this.innerHTML = `
      <section 
        class=${this.heroImg}
        style="background-image: url(${this.getAttribute('image')}"
      >

        <div class="hero__title">
          <p class="hero__text">
            <span class="hero__symbol--${this.getAttribute('page')}">{</span>
            ${this.getAttribute('title')}
            <span class="hero__symbol--${this.getAttribute('page')}">}</span>
          </p>
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
