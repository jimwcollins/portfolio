/***************************
 *
 *  JC PORTFOLIO
 *  animation.js
 *
 ***************************/

document.addEventListener('DOMContentLoaded', function () {
	/*******************
	 * Home animations
	 *******************/

	// Initial title animation
	gsap
		.timeline()
		.from('.home__hero__surname span', {
			opacity: 0,
			scale: 4,
			stagger: 0.1,
			duration: 2.5,
			ease: 'expo.out',
			delay: 0.5,
		})
		.from(
			'.home__hero__firstname',
			{
				opacity: 0,
				duration: 1.5,
			},
			'-=1',
		)
		.from(
			'.home__hero__subtitle',
			{
				opacity: 0,
				duration: 1.5,
			},
			'-=1',
		);

	// Hero animation on scroll

	gsap.to('.heroAnimUp', {
		y: '-50%',
		scrollTrigger: {
			trigger: '.home__hero',
			start: 'top top',
			end: 'bottom center',
			scrub: 0.5,
			// markers: { startColor: 'white', endColor: 'red', fontSize: '12px' },
		},
	});

	// About section animation

	// Portrait
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.home__about-me',
				start: 'top 55%',
				end: 'center 55%',
				scrub: 1.5,
				markers: { startColor: 'blue', endColor: 'purple', fontSize: '12px' },
			},
		})
		.from('.about-me-portrait', {
			height: '0px',
		})
		.from('.about-me-portrait', {
			width: '10px',
		})
		.from(
			'.about-me-portrait img',
			{
				opacity: 0,
			},
			'-=0.5',
		);

	// Text
	gsap.from('.aboutAnim', {
		opacity: 0,
		x: '5%',
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.home__about-me',
			start: 'top 60%',
			end: 'center center',
			scrub: 1.5,
			markers: { startColor: 'blue', endColor: 'purple', fontSize: '12px' },
		},
	});

	/*******************
	 * Trigger videos
	 *******************/

	const playVid = (vid, play) => {
		if (play) vid.play();
		else vid.pause();
	};

	// Single vids
	const allSoloVids = document.querySelectorAll('.video');

	const handleSingleVid = ([entry]) => {
		playVid(entry.target, entry.isIntersecting);
	};

	const vidObserver = new IntersectionObserver(handleSingleVid, {
		root: null,
		threshold: 1,
	});

	allSoloVids.forEach((vid) => {
		vidObserver.observe(vid);
	});

	// Vid Collection
	const allMultVids = document.querySelectorAll('.videoMulti');

	const handleMultiVids = ([entry]) => {
		// Loop through all videos in collection and play/pause all
		[...entry.target.children].forEach((childVid) => {
			playVid(childVid, entry.isIntersecting);
		});
	};

	const multiVidObserver = new IntersectionObserver(handleMultiVids, {
		root: null,
		threshold: 1,
	});

	allMultVids.forEach((multi) => {
		multiVidObserver.observe(multi);
	});

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
		threshold: 0.65,
	});

	// Only set up observers and hide spreads if user hasn't clicked back or fwd
	if (!browserBtn) {
		allFadeIns.forEach((elem) => {
			elem.classList.add('fadein--hidden');
			fadeObserver.observe(elem);
		});
	}

	/*************************
	 * Split section animation
	 *************************/

	const allSplits = document.querySelectorAll('.section__split');

	const revealSplit = ([entry], observer) => {
		if (!entry.isIntersecting) return;

		// Remove the hidden class when we intersect left and right divs
		const leftDiv = entry.target.children[0];
		const rightDiv = entry.target.children[1];

		leftDiv.classList.remove('split__left--hidden');
		rightDiv.classList.remove('split__right--hidden');

		observer.unobserve(entry.target);
	};

	const splitObserver = new IntersectionObserver(revealSplit, {
		root: null,
		threshold: 0.75,
	});

	if (!browserBtn) {
		allSplits.forEach((section) => {
			// Hide section initially
			const leftDiv = section.children[0];
			const rightDiv = section.children[1];
			leftDiv.classList.add('split__left--hidden');
			rightDiv.classList.add('split__right--hidden');

			splitObserver.observe(section);
		});
	}

	/*************************
	 * Pinch animation
	 *************************/

	const allPinch = document.querySelectorAll('.animPinch');

	const revealPinch = ([entry], observer) => {
		if (!entry.isIntersecting) return;

		// Remove the hidden class when we intersect left and right divs
		const leftElem = entry.target.children[0];
		const rightElem = entry.target.children[1];

		leftElem.classList.remove('animPinch__left--hidden');
		rightElem.classList.remove('animPinch__right--hidden');

		observer.unobserve(entry.target);
	};

	const pinchObserver = new IntersectionObserver(revealPinch, {
		root: null,
		threshold: 0.25,
	});

	if (!browserBtn) {
		allPinch.forEach((pinch) => {
			const leftElem = pinch.children[0];
			const rightElem = pinch.children[1];
			leftElem.classList.add('animPinch__left--hidden');
			rightElem.classList.add('animPinch__right--hidden');

			pinchObserver.observe(pinch);
		});
	}

	/***************************
	 * Image up animation
	 **************************/

	const allUpImages = document.querySelectorAll('.animUp');

	const revealUpImg = ([entry], observer) => {
		if (!entry.isIntersecting) return;

		entry.target.classList.remove('animUp--hidden');
		observer.unobserve(entry.target);
	};

	const upImgObserver = new IntersectionObserver(revealUpImg, {
		root: null,
		threshold: 0.3,
	});

	if (!browserBtn) {
		allUpImages.forEach((image) => {
			image.classList.add('animUp--hidden');
			upImgObserver.observe(image);
		});
	}

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
		threshold: 0.85,
	});

	let isLeft = false;

	if (!browserBtn) {
		allSpreads.forEach((spread) => {
			isLeft = !isLeft;
			if (isLeft) spread.classList.add('spread__left--hidden');
			else spread.classList.add('spread__right--hidden');

			spreadObserver.observe(spread);
		});
	}
});
