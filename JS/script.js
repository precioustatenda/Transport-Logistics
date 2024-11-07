document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerInner = document.querySelector('.header-inner');
  
    hamburgerMenu.addEventListener('click', () => {
      headerInner.classList.toggle('menu-open');
    });
  });
  