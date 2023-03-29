const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('nav');
const header = document.querySelector('header');

navButton.addEventListener('click', () => {
  navMenu.classList.toggle('visible');
  header.classList.toggle('visible');
  if (navMenu.classList.contains('visible')){
  document.getElementById("icono").classList.add('fa-plus');
  }else{
    document.getElementById("icono").classList.remove('fa-plus');
  }

});

