import { GAME_END, NEW_GAME } from '../actions/game'

export default function (state = false, {type, payload} ) {
	switch(type) {

    case NEW_GAME:
    return false;
    
    case GAME_END:
      return true


    default :
      return state;
    }
}