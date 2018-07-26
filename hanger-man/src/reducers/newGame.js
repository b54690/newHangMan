import list from '../lib/words'
import { NEW_GAME } from '../actions/game'


export const word = list[Math.floor(Math.random() * list.length)];

export default function(state = word, {type} ) {
  switch(type) {
    case NEW_GAME :
      return list[Math.floor(Math.random() * list.length)];

    default :
      return state;
    }
  }
