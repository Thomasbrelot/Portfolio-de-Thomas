// JavaScript Carousel Logic
const track = document.querySelector('.carousel-3d-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('right');
const prevButton = document.getElementById('left');

let angle = 0; // Angle initial
const numSlides = slides.length;
const theta = 360 / numSlides; // L'angle entre chaque slide
const radius = 500; // Distance entre les slides et le centre

const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));

  this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));

// Positionner les slides en cercle
slides.forEach((slide, index) => {
  const rotateAngle = theta * index;
  slide.style.transform = `rotateY(${rotateAngle}deg) translateZ(${radius}px)`;
});

// Fonction pour tourner le carrousel
const rotateCarousel = (direction) => {
  angle += direction * theta;
  track.style.transform = `rotateY(${angle}deg)`;
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

//aller a la section de ma présentation
function scrollToaPropos() {
  document.getElementById('MonPropos').scrollIntoView({ behavior: 'smooth' });
}
// aller directement à la prise de contact avec le client
function scroolToContactezMoi() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

//fonction pour aller directement à l'onglet de la navbarre
function scroolToTopPage() {
  document.getElementById('TopPage').scrollIntoView({ behavior: 'smooth' });
}
function scrollToMySkills() {
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
}
function scrollToMyPortfolio() {
  document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' });
}
