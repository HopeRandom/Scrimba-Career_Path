let player = {
    name: "Eliza", 
    chips: 100
};

const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const playerEl = document.getElementById('player-el');

playerEl.textContent = `${player.name} : $${player.chips}`;

let cards = [];
let sum = 0;
let message = "";

let hasBlackJack = false;
let isAlive = false;
let hasChips = true;

function startGame() {

    if (player.chips === 0) {
        isAlive = false
        gameOver()
    } else {
        isAlive = true
        hasBlackJack = false
    
        const firstCard = getRandomCard()
        const secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard

        renderGame()
    };

};

function renderGame() {
    cardsEl.textContent = `Cards: `

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    };

    sumEl.textContent = `Sum: ${sum}`

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        increaseChips()
    } else {
        message = "You're out of the game!"
        isAlive = false
    };
    messageEl.textContent = message
};

function newCard() {
    if (isAlive && hasChips && hasBlackJack === false) {
        const card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        decreaseChips()
    };
};

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    };
};


function increaseChips() {
    if (hasBlackJack) {
        player.chips += 10
        playerEl.textContent = `${player.name} : $${player.chips}`
    };
}

function decreaseChips() {
    if (isAlive === false) {
        player.chips -= 5
        playerEl.textContent = `${player.name} : $${player.chips}`
    };
};

function gameOver() {
    if (player.chips === 0) {
        playerEl.textContent = `${player.name}: $0`
        message = "ADD CHIPS TO PLAY"
        messageEl.textContent = message
    }
}