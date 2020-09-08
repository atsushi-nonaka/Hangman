class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    get puzzle(){
        let puzzle = ''
        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            }else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    setGuess(letter){
        letter = letter.toLowerCase()
        const isUnique = !this.guessedLetters.includes(letter)
        const isBadGuess = !this.word.includes(letter)

        if(this.status !== 'playing'){
            return
        }

        if(isUnique){
            this.guessedLetters.push(letter)
        }

        if(isUnique && isBadGuess){
            this.remainingGuesses --
        }
        this.setStatus()
    }

    setStatus(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if(this.remainingGuesses === 0){
            this.status = 'failed'
        }else if(finished){
            this.status = 'finished'
        }else {
            this.status = 'playing'
        }
    }

    get statusMessage(){
        const status = this.status
        let message = ''
        if(status === 'playing'){
            message = `Guesses left: ${this.remainingGuesses}`
        }else if(status === 'finished'){
            message = 'Great Work! You guessed the word'
        }else {
            message = `Nice try!! the word was "${this.word.join('')}"`
        }
        return message
    }
}

export { Hangman as default}