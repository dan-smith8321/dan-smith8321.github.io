const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('mouseenter', addBounce);
navBrand.addEventListener('animationend', removeBounce);

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => navLink.addEventListener('mouseenter', addBounce));
navLinks.forEach(navLink => navLink.addEventListener('animationend', removeBounce));

function addBounce(e){
  this.classList.add('animated', 'bounce');
}

function removeBounce(e){
  this.classList.remove('animated', 'bounce');
}
