import getAllElements from '../utils/getAllElements'
import getElement from '../utils/getElement'

export default function setupCards() {
  const buttonsAnswer = getAllElements('.quiz-card__button')

  buttonsAnswer.forEach(buttonAnswer => {
    buttonAnswer.addEventListener('click', event => {
      const answer = getElement('.quiz-card__answer', event.target.parentNode)
      answer.classList.toggle('hidden')
    })
  })
}
