import getAllElements from '../utils/getAllElements'
import getElement from '../utils/getElement'

export default function setupBookmarkPage() {
  const quizCards = getAllElements('.quiz-card')
  const button = getElement('.button-bookmark')
  button.addEventListener('click', () => {
    headerChange(button.dataset.header)
    pageChange(button.dataset.page)
    buttonChange(button.dataset.buttonName)

    quizCards.forEach(quizCard => {
      quizCard.classList.add('hidden')
    })

    const bookmarkedCards = getAllElements('.quiz-card__flag--style-svg')
    bookmarkedCards.forEach(bookmarkedCard => {
      bookmarkedCard.parentNode.classList.remove('hidden')
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
