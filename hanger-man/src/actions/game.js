export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
export const GAME_OVER = 'GAME_OVER'


export function newGame() {
  return {
    type: NEW_GAME,
    payload: {gameOver: false}
  }
}

export function makeGuess(guess) {
  return {
    type: MAKE_GUESS,
    payload: guess
  }
}

export function gameOver() {
  return {
    type: GAME_OVER,
  }
}