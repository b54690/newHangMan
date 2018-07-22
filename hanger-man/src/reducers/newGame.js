import WordList from '../lib/words'
import { NEW_GAME } from '../actions/game'

const randomWord = WordList[Math.floor(Math.random() * WordList.length)];

export default function(state = randomWord, {type} ) {
  switch(type) {
    case NEW_GAME :
      return WordList[Math.floor(Math.random() * WordList.length)];

    default :
      return state;
    }
  }
