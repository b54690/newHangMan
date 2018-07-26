import React, {Component} from 'react';
import { connect } from 'react-redux';
import {gameEnd} from '../actions/game'
import swal from 'sweetalert2'


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
            this.props.gameEnd()
            return     swal({
                title: "No more guesses, you're done for!",
                imageUrl: 'https://games-cdn.washingtonpost.com/images/prod/sm/5d95f8cb-4116-4548-b600-d28a9862ae1d/18708964-cdbc-4086-acd5-c2accb24156c-original.gif?ts=1468506991966',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false,
                icon: "error"
              })
        }
    }



    render() {
        
        const gameOver = this.props.gameOver
          
          if(gameOver === true) {
              return (
              <div style={{fontSize: '20px'}}>
                <p> Would you like to start a new game? </p>
              </div>
              )
          } else {
            return (
              <div style={{fontSize: '20px'}}>
              <p className="ShowGame">You've got {6 - this.wrongGuessCount() || 0 } more attempts </p>
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
  
  
  export default connect(mapStateToProps, {gameEnd})(GameLogic)