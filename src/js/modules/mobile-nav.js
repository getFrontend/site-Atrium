export const mobileNav = () => {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav_open');
		menuIcon.classList.toggle('nav-icon_active');
		document.body.classList.toggle('no-scroll');
	};
}