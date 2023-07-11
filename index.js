const links = document.querySelectorAll('.nav-link');
const socialIcons = document.querySelectorAll('.logo');
const observer = new IntersectionObserver(revealIcons);
socialIcons.forEach((icon) => {
	icon.classList.add('hidden');
	observer.observe(icon);
});
const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

links.forEach((link) => {
	link.addEventListener('click', function () {
		links.forEach((link) => {
			link.classList.remove('active');
		});
		this.classList.add('active');
	});
});

function removeAnimationStyles(event) {
	const icon = event.target;
	icon.classList.remove('hidden');
	icon.classList.remove('show');
	icon.removeEventListener('animationend', removeAnimationStyles);
}

function revealIcons(entries) {
	console.log('revealIcons is being executed');
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const icon = entry.target;
			icon.classList.add('show');
			console.log(entry);
		}
	});
}
