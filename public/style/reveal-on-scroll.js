// Reveal on scroll for .profile-summary and .project
window.addEventListener('DOMContentLoaded', function() {
  const revealElements = document.querySelectorAll('.profile-summary, .project');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 60) {
        el.classList.add('reveal-visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
});
