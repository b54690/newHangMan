import React, {Component} from 'react';
import { connect } from 'react-redux';
import {gameOver} from '../actions/game'
import swal from 'sweetalert'


class GameLogic extends Component {


    wrongGuessCount() {
        const word = this.props.word
        const guesses = this.props.guesses
        let wrongGuess = 0

        wrongGuess = guesses.filter(guess => word.indexOf(guess) < 0).length

        if(wrongGuess < 6) {
            return wrongGuess
        }

        else {
            this.props.gameOver()
            return swal("No more guesses, you're dead mate")
        }
    }

    render() {
        
        const gameOver = this.props.gameOver
          
          if(gameOver === true) {
              return (
                <div>
                  <p> Game is over! You can start a new game, if you like! 👻 ✌️ </p>
                </div>
              )
          } else {
            return (
              <div>
              <p className="ShowGame">You've got {6 - this.wrongGuessCount() || 0 } more tries! </p>
              </div>
            )
          }
    }
    
}


function mapStateToProps(state) {
    return {
      word: state.gameWord,
      guesses: state.guesses,
      gameOver: state.gameOver
    };
  }
  
  
  export default connect(mapStateToProps, {gameOver})(GameLogic)