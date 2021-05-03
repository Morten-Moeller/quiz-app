import getAllElements from '../utils/getAllElements'
import getElement from '../utils/getElement'

export default function setupHomePage() {
  const button = getElement('.button-home')
  button.addEventListener('click', () => {
    headerChange(button.dataset.header)
    pageChange(button.dataset.page)
    buttonChange(button.dataset.buttonName)

    const hidePages = getAllElements('.main-app')
    hidePages.forEach(page => page.classList.add('hidden'))
    const page = getElement(`[data-js="home-page"]`)
    page.classList.remove('hidden')

    const quizCards = getAllElements('.quiz-card')

    quizCards.forEach(quizCard => {
      quizCard.classList.remove('hidden')
    })
  })
}

function headerChange(headerName) {
  const selectHeader = getElement('h1')
  selectHeader.innerText = headerName
}

function buttonChange(buttonName) {
  const navigationButtons = getAllElements('[data-js="nav-button"]')
  navigationButtons.forEach(button =>
    button.classList.remove('app-footer__svg--active')
  )
  const highlitedButton = getElement(`.${buttonName}`)
  highlitedButton.classList.add('app-footer__svg--active')
}

function pageChange(pageName) {
  const hidePages = getAllElements('.main-app')
  hidePages.forEach(page => page.classList.add('hidden'))
  const page = getElement(`[data-js="${pageName}"]`)
  page.classList.remove('hidden')
}
