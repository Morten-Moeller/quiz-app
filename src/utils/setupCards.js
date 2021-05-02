import getAllElements from './getAllElements'
import getElement from './getElement'

export default function setupCards() {
  const buttonsAnswer = getAllElements('.quiz-card__button')

  buttonsAnswer.forEach(buttonAnswer => {
    buttonAnswer.addEventListener('click', event => {
      const answer = getElement('.quiz-card__answer', event.target.parentNode)
      answer.classList.toggle('hidden')
    })
  })
}
