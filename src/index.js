// Darkmode

const buttonDarkmode = document.querySelector('.profile__button-darkmode')
const body = document.querySelector('body')

buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
  body.classList.contains('darkmode')
    ? (buttonDarkmode.innerHTML = '🌞')
    : (buttonDarkmode.innerHTML = '🌚')
})
