gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", () => {
	initSmoothScroll();
});

const initSmoothScroll = () => {
	if (ScrollTrigger.isTouch !== 1) {
		ScrollSmoother.create({
			wrapper: ".wrapper",
			content: ".content",
			smooth: 1.5,
			effects: true,
		});

		animateSection(".hero-section", { opacity: 1 }, { opacity: 0 }, "center", "820");
		animateGalleryItems(
			".gallery__left .gallery__item",
			{ opacity: 0, x: -100 },
			{ opacity: 1, x: 0 }
		);
		animateGalleryItems(
			".gallery__right .gallery__item",
			{ opacity: 0, x: 75 },
			{ opacity: 1, x: 0 }
		);
	}
};

const animateSection = (trigger, fromVars, toVars, start, end) => {
	gsap.fromTo(trigger, fromVars, {
		...toVars,
		scrollTrigger: {
			trigger: trigger,
			start: start,
			end: end,
			scrub: true,
		},
	});
};

const animateGalleryItems = (selector, fromVars, toVars) => {
	const items = gsap.utils.toArray(selector);
	items.forEach((item) => {
		gsap.fromTo(item, fromVars, {
			...toVars,
			scrollTrigger: {
				trigger: item,
				start: "-650",
				end: "-100",
				scrub: true,
			},
		});
	});
};
