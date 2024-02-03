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

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.getElementById('confirmationMessage').classList.remove('hidden'); // Show the confirmation message
  });
  
  document.getElementById('closeConfirmation').addEventListener('click', function() {
    document.getElementById('confirmationMessage').classList.add('hidden'); // Hide the confirmation message
  });


  // Mobile menu toggle script
  const btn = document.querySelector('.mobile-menu-button');
  const menu = document.querySelector('.mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });