import getElement from './getElement'

export default function setupDarkmode() {
  const buttonDarkmode = getElement('.profile__button-darkmode')
  const body = getElement('body')

  buttonDarkmode.addEventListener('click', () => {
    body.classList.toggle('darkmode')
    const darkmodeIcon = body.classList.contains('darkmode') ? '🌞' : '🌚'
    buttonDarkmode.innerHTML = darkmodeIcon
  })
}
