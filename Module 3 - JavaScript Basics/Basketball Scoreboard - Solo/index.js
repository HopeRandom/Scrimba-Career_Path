const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")
const resetEl = document.getElementById("reset")
let homeScore = 0
let guestScore  = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    highlightWinner()
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    highlightWinner()
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    highlightWinner()
}


function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highlightWinner()
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    highlightWinner()
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    highlightWinner()
}

resetEl.addEventListener('click', () => {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore

    guestScoreEl.classList.remove("highlight")
    homeScoreEl.classList.remove("highlight")
})

function highlightWinner() {
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("highlight")
        guestScoreEl.classList.remove("highlight")
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add("highlight")
        homeScoreEl.classList.remove("highlight")
    } else {
        guestScoreEl.classList.add("highlight")
        homeScoreEl.classList.add("highlight")
    }
}