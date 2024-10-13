const track = document.querySelector('.carousel-3d-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('left');
const prevButton = document.getElementById('right');

let angle = 0; // L'angle de départ
const numSlides = slides.length; // Nombre total de slides
const theta = 360 / numSlides; // L'angle entre chaque projet
const radius = 500; // Distance des projets du centre (modifiable selon les besoins)

// Positionner les slides en cercle autour de l'axe Y
slides.forEach((slide, index) => {
  const rotateAngle = theta * index; // Calculer l'angle pour chaque projet
  slide.style.transform = `rotateY(${rotateAngle}deg) translateZ(${radius}px)`; // Créer la disposition en cercle
});

// Fonction pour faire tourner le carrousel
const rotateCarousel = (direction) => {
  angle += direction * theta; // Ajuster l'angle de rotation selon la direction (précédent ou suivant)
  track.style.transform = `rotateY(${angle}deg)`; // Appliquer la rotation à l'ensemble du carrousel
};

// Bouton "suivant"
nextButton.addEventListener('click', () => {
  rotateCarousel(-1); // Tourner vers la gauche
});

// Bouton "précédent"
prevButton.addEventListener('click', () => {
  rotateCarousel(1); // Tourner vers la droite
});

//ouvrir mon cv
function openCv() {
  window.open('Mon-cv/cv-portfolio-seo.png', '_blank');
}

//aller a la section a mon propos
function scrollToaPropos() {
  document.getElementById('MonPropos').scrollIntoView({ behavior: 'smooth' });
}
// aller directement a ma présentation
function scroolToContactezMoi() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
