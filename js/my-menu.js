// my-menu , my-menu-content, my-menu-button

const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')
const myMenuContent = document.querySelector('.my-menu-content')

myMenuButton.addEventListener('click', toggleMyMenu)

function toggleMyMenu() {
  if(!myMenu.classList.contains('is-active')) {
    myMenu.classList.toggle('is-active')
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
}

function closeMyMenuOnClickingOutside (e) {
  if(!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}
