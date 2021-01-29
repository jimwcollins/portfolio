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

  let leftDiv, rightDiv;

  if (entry.target.children.length === 2) {
    leftDiv = entry.target.children[0];
    rightDiv = entry.target.children[1];
  } else {
    leftDiv = entry.target.children[1];
    rightDiv = entry.target.children[2];
  }

  // Remove the hidden class when we intersect left and right divs
  leftDiv.classList.remove('section__left--hidden');
  rightDiv.classList.remove('section__right--hidden');

  observer.unobserve(entry.target);
};

const splitObserver = new IntersectionObserver(revealSplit, {
  root: null,
  threshold: 0.75,
});

allSplits.forEach((section) => {
  let leftDiv, rightDiv;

  // Hide all sections with JS
  if (section.children.length === 2) {
    leftDiv = section.children[0];
    rightDiv = section.children[1];
  } else {
    leftDiv = section.children[1];
    rightDiv = section.children[2];
  }

  leftDiv.classList.add('section__left--hidden');
  rightDiv.classList.add('section__right--hidden');
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

  console.log(entry.target.classList);

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
  console.log(isLeft);
  if (isLeft) spread.classList.add('spread__left--hidden');
  else spread.classList.add('spread__right--hidden');

  spreadObserver.observe(spread);
});
