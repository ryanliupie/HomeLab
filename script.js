const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburgerMenu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})