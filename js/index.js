/***************************
* 
*  JC PORTFOLIO
*  index.js
* 
***************************/

/**************
* Site-wide JS
**************/

// Header 

// Handle header on page scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > (window.innerHeight - 1) || document.documentElement.scrollTop > (window.innerHeight - 1)) {
        document.querySelector('.header').classList.add('header--scroll');
        document.querySelectorAll('.nav__link').forEach(item => item.classList.add('nav__link--scroll'));
    } else {
        document.querySelector('.header').classList.remove('header--scroll');
        document.querySelectorAll('.nav__link').forEach(item => item.classList.remove('nav__link--scroll'));
    }
});
