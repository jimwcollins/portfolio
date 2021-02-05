/***************************
 *
 *  JC PORTFOLIO
 *  Contact.js
 *
 ***************************/

// Reusable Contact component

const contactRef = {
  Default: 'get in touch!',
  GitHub: 'browse my GitHub repos!',
  Mail: 'email: jimwcollins@gmail.com!',
  LinkedIn: 'visit my LinkedIn profile!',
  CV: 'download my CV!',
};

class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <p>${this.getAttribute('intro')}
        <span class='contact__text contact__text--show'>${
          contactRef['Default']
        }</span></p>

        <div class="contactGrid" onmouseleave="removeHover()">
          <div class="contactGrid__item" onmouseenter="contactHover('GitHub')">
            <a href="https://github.com/jimwcollins" target="newtab">
              <svg class="contactGrid__icon">
                <use
                  xlink:href="/img/portfolio-icons-sprite.svg#icon-github"
                ></use>
              </svg>
            </a>
          </div>
          <div class="contactGrid__item" onmouseenter="contactHover('Mail')">
            <a href="mailto:jimwcollins@gmail.com" target="newtab">
              <div class="contactGrid__container">
                <svg class="contactGrid__icon--circle">
                  <use
                    xlink:href="/img/portfolio-icons-sprite.svg#icon-mail"
                  ></use>
                </svg>
              </div>
            </a>
          </div>
          <div class="contactGrid__item" onmouseenter="contactHover('LinkedIn')">
            <a href="https://www.linkedin.com/in/jimwcollins/" target="newtab">
              <svg class="contactGrid__icon">
                <use
                  xlink:href="/img/portfolio-icons-sprite.svg#icon-linkedin-with-circle"
                ></use>
              </svg>
            </a>
          </div>
          <div class="contactGrid__item" onmouseenter="contactHover('CV')">
            <a href="/files/JamesCollins_CV.pdf" target="newtab">
              <div class="contactGrid__container">
                <svg class="contactGrid__icon--circle" style="width: 52%; height: 52%">
                  <use
                    xlink:href="/img/portfolio-icons-sprite.svg#icon-cv"
                  ></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
    `;
  }
}

customElements.define('contact-me', Contact);

// JS

const contactText = document.querySelector('.contact__text');

const contactHover = (contact) => {
  contactText.classList.remove('contact__text--show');

  setTimeout(() => {
    contactText.innerHTML = contactRef[contact];
  }, 600);
  setTimeout(() => {
    contactText.classList.add('contact__text--show');
  }, 600);
};

const removeHover = () => {
  contactText.classList.remove('contact__text--show');

  setTimeout(() => {
    if (!contactText.classList.contains('contact__text--show'))
      contactText.innerHTML = contactRef['Default'];
  }, 600);
  setTimeout(() => {
    contactText.classList.add('contact__text--show');
  }, 600);
};
