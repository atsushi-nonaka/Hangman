import Hangman from './hangman'
import getPuzzle from './requests'

let game1
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#remainder')

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    game1.setGuess(guess) 
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle(3)
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()