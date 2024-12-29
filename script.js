//let progress = 0;
//const progressText = document.getElementById('progress-text');
//const loader = document.getElementById('loader');
//const cache = document.getElementById('cache');
//const content = document.getElementById('content');
//const enterLink = document.getElementById('enter-link');
//const list = document.querySelectorAll('.list');

// Masquer le loader et afficher le contenu après avoir cliqué sur le lien "Enter"

// Sélection des éléments
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navMenu = document.getElementById('nav-menu');

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
  // Ajout ou suppression des classes 'open' pour afficher ou cacher le menu
  navMenu.classList.toggle('open');

  // Affichage ou masquage de l'icône de fermeture
  closeIcon.style.display = navMenu.classList.contains('open') ? 'block' : 'none';

  // Basculer l'état visuel du menu icon (optionnel)
  menuIcon.classList.toggle('open');
}

// Fonction pour fermer le menu
function closeMenu() {
  navMenu.classList.remove('open');
  closeIcon.style.display = 'none';
  menuIcon.classList.remove('open');
}

// Écouteur pour l'icône hamburger (ouvrir le menu)
menuIcon.addEventListener('click', (event) => {
  event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
  toggleMenu();
});

// Écouteur pour l'icône de fermeture
closeIcon.addEventListener('click', (event) => {
  event.stopPropagation(); // Empêche la fermeture par erreur
  closeMenu();
});

// Écouteur pour fermer le menu en cliquant en dehors
document.addEventListener('click', (event) => {
  // Si l'utilisateur clique en dehors du menu ou des icônes, fermer le menu
  if (
    !menuIcon.contains(event.target) &&
    !navMenu.contains(event.target) &&
    !closeIcon.contains(event.target)
  ) {
    closeMenu();
  }
});



// Simuler le chargement avec un intervalle pour mettre à jour la progression
//const progressInterval = setInterval(updateProgress, 20); // Chaque étape de 1% prend 30 ms

//ouvrir mon cv
function openCv() {
  window.open('Mon-cv/cv-portfolio-seo.png', '_blank');
}
