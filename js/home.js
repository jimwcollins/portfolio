/***************************
 *
 *  JC PORTFOLIO
 *  home.js
 *
 ***************************/

const aboutMeSection = document.querySelector('.home__about-me');

const displaySection = (entries, observer) => {
  const [entry] = entries;

  if (entry.isIntersecting) {
    aboutMeSection.classList.remove('section--hidden');
  } else {
    aboutMeSection.classList.add('section--hidden');
  }
};

const sectionRef = {
  root: null,
  threshold: 0,
};

const aboutMeObserver = new IntersectionObserver(displaySection, sectionRef);
aboutMeObserver.observe(aboutMeSection);
