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




// function de la navbar
function activeLink() {
  list.forEach((li) => {
    li.classList.remove('active');
  });
  this.classList.add('active');
}
list.forEach(($li) => {
  li.addEventListener('click', activeLink);
});