
// variables
let playingDeckA = []
let playedCardA = []
let hostageDeckA = []
let collectionDeckA = []
let playingDeckB = []
let playedCardB = []
let hostageDeckB = []
let collectionDeckB = []
let startingDeck = []
// cached references
let deck1El = document.getElementById('playingDeckA')
let deck2El = document.getElementById('playedCardA')
let deck3El = document.getElementById('hostageDeckA')
let deck4El = document.getElementById('collectionDeckA')
let deck5El = document.getElementById('playingDeckB')
let deck6El = document.getElementById('playedCardB')
let deck7El = document.getElementById('hostageDeckB')
let deck8El = document.getElementById('collectionDeckB')
let startBtnEl = document.getElementById('startBtn')
let nextTurnBtnEl = document.getElementById('nextTurnBtn')
let resetBtnEl = document.getElementById('resetBtn')

// Buttons
document.getElementById('startBtn').addEventListener(`click`, function() {
  shuffleDeck(startingDeck)
  handleStart()
  startBtnEl.disabled = true
  nextTurnBtnEl.disabled = false
  console.log(playingDeckA)
  console.log(playingDeckB)
})
document.getElementById('nextTurnBtn').addEventListener(`click`, function() {
  playCards()
  compareCards()
  console.log(playingDeckA)
  console.log(playingDeckB)
  console.log(playedCardA)
  console.log(playedCardB)
  console.log(hostageDeckA)
  console.log(hostageDeckB)
  console.log(collectionDeckA)
  console.log(collectionDeckB)
})
document.getElementById('resetBtn').addEventListener(`click`, function() {
  handleReset()
})
// Runs on start
nextTurnBtnEl.disabled = true
init()
// functions
function init() {
  startingDeck = [
    {title: "dA", value: 1},
    {title: "sA", value: 1},
    {title: "hA", value: 1},
    {title: "cA", value: 1},
    {title: "d02", value: 2},
    {title: "s02", value: 2},
    {title: "h02", value: 2},
    {title: "c02", value: 2},
    {title: "d03", value: 3},
    {title: "s03", value: 3},
    {title: "h03", value: 3},
    {title: "c03", value: 3},
    {title: "d04", value: 4},
    {title: "s04", value: 4},
    {title: "h04", value: 4},
    {title: "c04", value: 4},
    {title: "d05", value: 5},
    {title: "s05", value: 5},
    {title: "h05", value: 5},
    {title: "c05", value: 5},
    {title: "d06", value: 6},
    {title: "s06", value: 6},
    {title: "h06", value: 6},
    {title: "c06", value: 6},
    {title: "d07", value: 7},
    {title: "s07", value: 7},
    {title: "h07", value: 7},
    {title: "c07", value: 7},
    {title: "d08", value: 8},
    {title: "s08", value: 8},
    {title: "h08", value: 8},
    {title: "c08", value: 8},
    {title: "d09", value: 9},
    {title: "s09", value: 9},
    {title: "h09", value: 9},
    {title: "c09", value: 9},
    {title: "d10", value: 10},
    {title: "s10", value: 10},
    {title: "h10", value: 10},
    {title: "c10", value: 10},
    {title: "dJ", value: 11},
    {title: "sJ", value: 11},
    {title: "hJ", value: 11},
    {title: "cJ", value: 11},
    {title: "dQ", value: 12},
    {title: "sQ", value: 12},
    {title: "hQ", value: 12},
    {title: "cQ", value: 12},
    {title: "dK", value: 13},
    {title: "sK", value: 13},
    {title: "hK", value: 13},
    {title: "cK", value: 13}, 
  ]
}
function shuffleDeck(arr) {
  let m = arr.length, t, i
  while(m) {
    i = Math.floor(Math.random()*m--)
    t = arr[m]
    arr[m] = arr[i]
    arr[i] = t
  }
  return arr
}
function handleStart() {
  playingDeckA = startingDeck.splice(0,26)
  playingDeckB = startingDeck.splice(0,26)
}
function compareCards() {
  if (playedCardA[0].value > playedCardB[0].value) {
    playerAWins()
    console.log(`Player A Wins!`)
  } else if (playedCardA[0].value < playedCardB[0].value) {
    playerBWins()
    console.log(`Player B Wins!`)
  } else {
// War!
    console.log("War!")
    supplyHostages()
    playCards()
    if (playedCardA[0].value > playedCardB[0].value) {
    playerAWins()
    winHostagesA()
    } else if (playedCardA[0].value < playedCardB[0].value) {
    playerBWins()
    winHostagesB()
    } else { 
      // Double War!
      console.log("Double War!")
      supplyHostages()
      playCards()
      if (playedCardA[0].value > playedCardB[0].value) {
        playerAWins()
        winDoubleHostagesA()
        } else if (playedCardA[0].value < playedCardB[0].value) {
        playerBWins()
        winDoubleHostagesB()
        } else {
          // Triple War aka Tie
        }
      }
  }
}
function handleReset() {
  playingDeckA = []
  playedCardA = []
  hostageDeckA = []
  collectionDeckA = []
  playingDeckB = []
  playedCardB = []
  hostageDeckB = []
  collectionDeckB = []
  startingDeck = [
    {title: "dA", value: 1},
    {title: "sA", value: 1},
    {title: "hA", value: 1},
    {title: "cA", value: 1},
    {title: "d02", value: 2},
    {title: "s02", value: 2},
    {title: "h02", value: 2},
    {title: "c02", value: 2},
    {title: "d03", value: 3},
    {title: "s03", value: 3},
    {title: "h03", value: 3},
    {title: "c03", value: 3},
    {title: "d04", value: 4},
    {title: "s04", value: 4},
    {title: "h04", value: 4},
    {title: "c04", value: 4},
    {title: "d05", value: 5},
    {title: "s05", value: 5},
    {title: "h05", value: 5},
    {title: "c05", value: 5},
    {title: "d06", value: 6},
    {title: "s06", value: 6},
    {title: "h06", value: 6},
    {title: "c06", value: 6},
    {title: "d07", value: 7},
    {title: "s07", value: 7},
    {title: "h07", value: 7},
    {title: "c07", value: 7},
    {title: "d08", value: 8},
    {title: "s08", value: 8},
    {title: "h08", value: 8},
    {title: "c08", value: 8},
    {title: "d09", value: 9},
    {title: "s09", value: 9},
    {title: "h09", value: 9},
    {title: "c09", value: 9},
    {title: "d10", value: 10},
    {title: "s10", value: 10},
    {title: "h10", value: 10},
    {title: "c10", value: 10},
    {title: "dJ", value: 11},
    {title: "sJ", value: 11},
    {title: "hJ", value: 11},
    {title: "cJ", value: 11},
    {title: "dQ", value: 12},
    {title: "sQ", value: 12},
    {title: "hQ", value: 12},
    {title: "cQ", value: 12},
    {title: "dK", value: 13},
    {title: "sK", value: 13},
    {title: "hK", value: 13},
    {title: "cK", value: 13}, 
  ]
  nextTurnBtnEl.disabled = true
  startBtnEl.disabled = false
}
function playCards() {
  if (playingDeckA.length !== 0 && playingDeckB.length !== 0) {
  createAndPlayPlayedCards()
  }
  if (playingDeckA.length !== 0 && playingDeckB.length === 0) {
    // shuffleCollectionDeckB()
    shuffleDeck(collectionDeckB)
    moveDeckB()
    createAndPlayPlayedCards()
  }
  if (playingDeckA.length === 0 && playingDeckB.length !== 0) {
    // shuffleCollectionDeckA()
    shuffleDeck(collectionDeckA)
    moveDeckA()
    createAndPlayPlayedCards()
  } 
  if (playingDeckA.length === 0 && playingDeckB.length === 0) {
    if (collectionDeckA.length !== 0 && collectionDeckB.length !== 0) {
      shuffleDeck(collectionDeckA)
      shuffleDeck(collectionDeckB)
      moveDeckA()
      moveDeckB()
      createAndPlayPlayedCards()
    }
    if (collectionDeckA.length === 0 && collectionDeckB.length === 0) {
      returnHostagesAndCardPlayed()
    }
    if (collectionDeckA.length !== 0 && collectionDeckB.length === 0) {
      aWinsGame()
    }
    if (collectionDeckA.length === 0 && collectionDeckB.length !== 0) {
      bWinsGame()
    }
    // render message tie game
    console.log("Tie!")
  }
}
// function shuffleCollectionDeckA() {
//   if (collectionDeckA.length !== 0) {
//     shuffleDeck(collectionDeckA)
//     playingDeckA = collectionDeckA
//     collectionDeckA = []
//   } else {
//     bWinsGame()
//   }
// }

// function shuffleCollectionDeckB() {
  // if (collectionDeckB !== 0) {
  //   shuffleDeck(collectionDeckB)
  //   playingDeckB = collectionDeckB
  //   collectionDeckB = []
  // } else {
  //   aWinsGame()
  // }
// }
function aWinsGame() {
  console.log("A Wins!")  
}
function bWinsGame() {
  console.log("B Wins!")
}
function supplyHostages() {    
  if (playingDeckA.length > 3 && playingDeckB.length > 3) {
    const hostagesA = playingDeckA.splice(0,3)
    const hostagesB = playingDeckB.splice(0,3)
    const cardA = playedCardA.pop()
    const cardB = playedCardB.pop()
    hostageDeckA.push(hostagesA[0],hostagesA[1],hostagesA[2])
    hostageDeckA.push(cardA)
    hostageDeckB.push(hostagesB[0],hostagesB[1],hostagesB[2],)
    hostageDeckB.push(cardB)
  } else if (playingDeckA.length <= 3 && playingDeckB.length > 3) {
    shuffleDeck(collectionDeckA)
    moveDeckA()
  } else if (playingDeckA.length > 3 && playingDeckB.length <= 3) {
    shuffleDeck(collectionDeckB)
    moveDeckB()
  } else {
  }
}
function playerAWins() {
  const cardA = playedCardA.pop()
  const cardB = playedCardB.pop()
  collectionDeckA.push(cardA,cardB)
}
function playerBWins() {
  const cardA = playedCardA.pop()
  const cardB = playedCardB.pop()
  collectionDeckB.push(cardA,cardB)
}
function winHostagesA() {
  collectionDeckA.push(hostageDeckA[0],hostageDeckA[1],hostageDeckA[2],hostageDeckA[3],hostageDeckB[0],hostageDeckB[1],hostageDeckB[2],hostageDeckB[3])
}
function winHostagesB() {
  collectionDeckB.push(hostageDeckA[0],hostageDeckA[1],hostageDeckA[2],hostageDeckA[3],hostageDeckB[0],hostageDeckB[1],hostageDeckB[2],hostageDeckB[3])
}
function winDoubleHostagesA() {
  const hostagesA = hostageDeckA
  const hostagesB = hostageDeckB
  collectionDeckA.push(hostagesA[0],hostagesA[1],hostagesA[2],hostagesA[3],hostagesA[4],hostagesA[5],hostagesA[6],hostagesA[7],hostagesB[0],hostagesB[1],hostagesB[2],hostagesB[3],hostagesB[4],hostagesB[5],hostagesB[6],hostagesB[7])
}
function winDoubleHostagesB() {
  const hostagesA = hostageDeckA
  const hostagesB = hostageDeckB
  collectionDeckB.push(hostagesA[0],hostagesA[1],hostagesA[2],hostagesA[3],hostagesA[4],hostagesA[5],hostagesA[6],hostagesA[7],hostagesB[0],hostagesB[1],hostagesB[2],hostagesB[3],hostagesB[4],hostagesB[5],hostagesB[6],hostagesB[7])
}
function createAndPlayPlayedCards() {
  const cardA = playingDeckA.shift()
  const cardB = playingDeckB.shift()
  playedCardA.push(cardA)
  playedCardB.push(cardB)
}
// function playPlayedCards() {

// }
function returnHostagesAndCardPlayed() {
  const hostagesA = hostageDeckA
  const hostagesB = hostageDeckB
  const cardA = playedCardA.pop()
  const cardB = playedCardB.pop()
  collectionDeckA.push(hostagesA[0],hostagesA[1],hostagesA[2],cardA)
  collectionDeckB.push(hostagesB[0],hostagesB[1],hostagesB[2],cardB)
  if (hostagesA.length >= 5) {
    collectionDeckA.push(hostagesA[3],hostagesA[4],hostagesA[5],)
    collectionDeckB.push(hostagesB[3],hostagesB[4],hostagesB[5],)
  }
}
function moveDeckA() {
  playingDeckA = collectionDeckA
  collectionDeckA = []
}
function moveDeckB() {
  playingDeckB = collectionDeckB
  collectionDeckB = []
}