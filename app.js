const clue = document.getElementById("clues-guess")
const numClues = document.getElementById("numclue")
const enterBox = document.getElementById("enter-box")
const button = document.getElementById("btn")
const newGamebtn = document.getElementById("game-new")


const randomNumber = () => {
    random = Math.floor(Math.random() * 100)
}

const sendBtn = () => {
    if (enterBox.value == 0 || enterBox.value > 99) {
        clue.innerHTML = "guess only 1 to 99"
    }else if (enterBox.value == random) {
        clue.innerHTML = "Congratulation"
        clue.style.color = "green"
        numClues.innerHTML = enterBox.value
        numClues.style.color = "green"

    }else {
        numClues.innerHTML = enterBox.value
        numClues.style.color = "red"
        clueHelp()
    }
}

const clueHelp = () => {
    if (random > enterBox.value) {
        clue.innerHTML = "too low"
    }else {
        clue.innerHTML = "too much"
    }
}

const newGame = () => {
    randomNumber()
    clue.innerHTML = "Clues"
    numClues.innerHTML = "_____"
    numClues.style.color = "black"
}

randomNumber()
button.addEventListener('click', sendBtn)
newGamebtn.addEventListener('click', newGame)