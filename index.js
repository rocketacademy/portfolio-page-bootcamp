const links = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
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
