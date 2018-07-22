export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
export const GAME_END = 'GAME_END'


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

export function gameEnd() {
  return {
    type: GAME_END,
  }
}