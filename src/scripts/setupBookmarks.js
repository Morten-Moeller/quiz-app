import getAllElements from '../utils/getAllElements'
import getElement from '../utils/getElement'

export default function setupBookmarks() {
  const bookmarks = getAllElements('.quiz-card__flag')

  bookmarks.forEach(bookmark =>
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('quiz-card__flag--style-svg')
      const selectHeader = getElement('h1')
      if (selectHeader.innerText === 'Bookmarked cards') {
        getElement('.button-bookmark').click()
      }
    })
  )
}
