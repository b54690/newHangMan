import { combineReducers } from 'redux'
import newGame from './newGame'
import guesses from './playerLoose'
import gameOver from './playerWin'

export default combineReducers({
    newGame,
    guesses,
    gameOver
})
