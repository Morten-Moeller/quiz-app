// Darkmode

const buttonDarkmode = document.querySelector('.profile__button-darkmode')
const body = document.querySelector('body')

buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
  const darkmodeIcon = body.classList.contains('darkmode') ? '🌞' : '🌚'
  buttonDarkmode.innerHTML = darkmodeIcon
})

// Navigation

const buttonHome = document.querySelector('.button-home')
const buttonBookmark = document.querySelector('.button-bookmark')
const buttonForm = document.querySelector('.button-form')
const buttonProfile = document.querySelector('.button-profile')

const mainHome = document.querySelector('.home-page')
const mainBookmark = document.querySelector('.bookmark-page')
const mainForm = document.querySelector('.form-page')
const mainProfile = document.querySelector('.profile-page')

buttonHome.addEventListener('click', () => {
  mainHome.classList.remove('hidden')
  mainBookmark.classList.add('hidden')
  mainForm.classList.add('hidden')
  mainProfile.classList.add('hidden')

  buttonHome.classList.add('app-footer__svg--active')
  buttonBookmark.classList.remove('app-footer__svg--active')
  buttonForm.classList.remove('app-footer__svg--active')
  buttonProfile.classList.remove('app-footer__svg--active')
})

buttonBookmark.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmark.classList.remove('hidden')
  mainForm.classList.add('hidden')
  mainProfile.classList.add('hidden')

  buttonHome.classList.remove('app-footer__svg--active')
  buttonBookmark.classList.add('app-footer__svg--active')
  buttonForm.classList.remove('app-footer__svg--active')
  buttonProfile.classList.remove('app-footer__svg--active')
})

buttonForm.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  mainForm.classList.remove('hidden')
  mainProfile.classList.add('hidden')

  buttonHome.classList.remove('app-footer__svg--active')
  buttonBookmark.classList.remove('app-footer__svg--active')
  buttonForm.classList.add('app-footer__svg--active')
  buttonProfile.classList.remove('app-footer__svg--active')
})

buttonProfile.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  mainForm.classList.add('hidden')
  mainProfile.classList.remove('hidden')

  buttonHome.classList.remove('app-footer__svg--active')
  buttonBookmark.classList.remove('app-footer__svg--active')
  buttonForm.classList.remove('app-footer__svg--active')
  buttonProfile.classList.add('app-footer__svg--active')
})

//  Bookmark toggle

const bookmark = document.querySelector('.quiz-card__flag')

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__flag--style-svg')
})

const buttonAnswer = document.querySelector('.quiz-card__button')
const answer = document.querySelector('.quiz-card__answer')

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})
