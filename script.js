// Responsive nav + smooth scroll behavior

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
  
    // Toggle mobile nav
    function toggleNav() {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    }
  
    hamburger.addEventListener('click', toggleNav);
  
    // Close mobile nav when a link is clicked (and smooth scroll)
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        // smooth scroll to target
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        // close menu if open
        if (nav.classList.contains('open')) {
          toggleNav();
        }
      });
    });
  
    // Optional: close nav if user clicks outside the menu (mobile)
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && nav.classList.contains('open')) {
        toggleNav();
      }
    });
  
    // Make sure hero fills reasonable viewport on mobile (fix some mobile UI quirks)
    function setHeroMinHeight() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      // Use innerHeight to handle mobile chrome UI hiding
      hero.style.minHeight = Math.max(window.innerHeight * 0.6, 400) + 'px';
    }
  
    window.addEventListener('resize', setHeroMinHeight);
    setHeroMinHeight();
  });
  