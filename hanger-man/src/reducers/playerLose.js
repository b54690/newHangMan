import { GAME_END, NEW_GAME } from '../actions/game'

export default function (state = false, {type, payload} ) {
	switch(type) {
    
    case GAME_END:
      return true
    
    case NEW_GAME:
      return false;

    default :
      return state;
    }
}