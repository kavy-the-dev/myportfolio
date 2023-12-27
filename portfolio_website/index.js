document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800, // Adjust the scrolling speed as needed
      speedAsDuration: true,
      easing: 'easeInOutQuad'
  });

  // Highlight the active link in the navigation bar based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', function() {
      let currentSection = '';

      sections.forEach(function(section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute('id');
          }
      });

      navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(currentSection)) {
              link.classList.add('active');
          }
      });
  });
});
