/***************************
 *
 *  JC PORTFOLIO
 *  index.js
 *
 ***************************/

/*******************
 * Fade-in animation
 *******************/

const allFadeIns = document.querySelectorAll('.fadein');

const revealElem = ([entry], observer) => {
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('fadein--hidden');
  observer.unobserve(entry.target);
};

const fadeObserver = new IntersectionObserver(revealElem, {
  root: null,
  threshold: 0.2,
});

allFadeIns.forEach((elem) => {
  elem.classList.add('fadein--hidden');
  fadeObserver.observe(elem);
});

/*************************
 * Split section animation
 *************************/

const allSplits = document.querySelectorAll('.section__split');

const revealSplit = ([entry], observer) => {
  if (!entry.isIntersecting) return;

  // Remove the hidden class when we intersect left and right divs
  const leftDiv = entry.target.querySelector('.split__left');
  const rightDiv = entry.target.querySelector('.split__right');

  leftDiv.classList.remove('split__left--hidden');
  rightDiv.classList.remove('split__right--hidden');

  observer.unobserve(entry.target);
};

const splitObserver = new IntersectionObserver(revealSplit, {
  root: null,
  threshold: 0.2,
});

allSplits.forEach((section) => {
  // Hide section initially
  const leftDiv = section.querySelector('.split__left');
  const rightDiv = section.querySelector('.split__right');
  leftDiv.classList.add('split__left--hidden');
  rightDiv.classList.add('split__right--hidden');

  splitObserver.observe(section);
});

/***************************
 * Image up animation
 **************************/

const allUpImages = document.querySelectorAll('.image__animUp');

const revealUpImg = ([entry], observer) => {
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('image__animUp--hidden');
  observer.unobserve(entry.target);
};

const upImgObserver = new IntersectionObserver(revealUpImg, {
  root: null,
  threshold: 0.5,
});

allUpImages.forEach((image) => {
  image.classList.add('image__animUp--hidden');
  upImgObserver.observe(image);
});

/***************************
 * Project spread animation
 **************************/

const allSpreads = document.querySelectorAll('.spread');

const revealSpread = ([entry], observer) => {
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('spread__left--hidden');
  entry.target.classList.remove('spread__right--hidden');

  observer.unobserve(entry.target);
};

const spreadObserver = new IntersectionObserver(revealSpread, {
  root: null,
  threshold: 0.5,
});

let isLeft = false;

allSpreads.forEach((spread) => {
  // Apply our hidden classes
  isLeft = !isLeft;
  if (isLeft) spread.classList.add('spread__left--hidden');
  else spread.classList.add('spread__right--hidden');

  spreadObserver.observe(spread);
});
