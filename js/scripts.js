tailwind.config = {
    darkMode: 'class', // Enable dark mode
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
}

document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', function () {
        let offset = window.pageYOffset;
        parallaxElements.forEach(function (el) {
            el.style.backgroundPositionY = offset * 0.7 + 'px';
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });