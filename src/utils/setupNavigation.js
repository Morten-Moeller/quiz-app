import getElement from './getElement'
import getAllElements from './getAllElements'

const navigationButtons = getAllElements('[data-js="nav-button"]')

export default function setupNavigation() {
  const buttonForm = getElement('[data-button-name="button-form"]')
  buttonForm.addEventListener('click', () => {
    headerChange(buttonForm.dataset.header)
    pageChange(buttonForm.dataset.page)
    buttonChange(buttonForm.dataset.buttonName)
  })

  const buttonProfile = getElement('[data-button-name="button-profile"]')
  buttonProfile.addEventListener('click', () => {
    headerChange(buttonProfile.dataset.header)
    pageChange(buttonProfile.dataset.page)
    buttonChange(buttonProfile.dataset.buttonName)
  })

  function headerChange(headerName) {
    const selectHeader = getElement('h1')
    selectHeader.innerText = headerName
  }

  function pageChange(pageName) {
    const hidePages = getAllElements('.main-app')
    hidePages.forEach(page => page.classList.add('hidden'))
    const page = getElement(`[data-js="${pageName}"]`)
    page.classList.remove('hidden')
  }

  function buttonChange(buttonName) {
    navigationButtons.forEach(button =>
      button.classList.remove('app-footer__svg--active')
    )
    const highlitedButton = getElement(`.${buttonName}`)
    highlitedButton.classList.add('app-footer__svg--active')
  }
}
