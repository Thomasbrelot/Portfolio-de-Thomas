// Sélectionner tous les liens de navigation
const navLinks = document.querySelectorAll('.nav-link');

// Ajouter un événement de défilement pour gérer l'état actif des liens
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY;

  navLinks.forEach((link) => {
    let section = document.querySelector(link.getAttribute('href'));

    if (
      section.offsetTop <= fromTop + 50 &&
      section.offsetTop + section.offsetHeight > fromTop + 50
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      link.classList.add('active');
    }
  });
});
