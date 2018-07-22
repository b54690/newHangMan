import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import Paper from '@material-ui/core/Paper';
// import PropTypes from 'prop-types'
import {gameOver} from '../actions/game'
import swal from 'sweetalert'


class Word extends PureComponent {
    constructor(props) {
        super(props);

    this.state = {
        gameOver: false,
    };
}

showGuess() {
    const word = this.props.word
    const guesses = this.props.guesses
    const gameOver = this.props.gameOver
  
    const randomWord =  word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ")
  
  
    if( randomWord.indexOf('_') < 0 ) {
      swal("Awesome! You figured it out!", {
          icon: "success",
        })
        this.props.gameOver()
      }
  
    if(gameOver === true) {
      return word
    }
  
  
       console.log(randomWord, "randomWord")
       return randomWord
     }
  
     render() {
  
      return(
        <h1>
        <p className="ShowGame">{this.showGuess()}</p>
        </h1>
      )
    }
  }

function mapStateToProps(state) {
    return {
      word: state.gameWord,
      guesses: state.guesses,
      gameOver: state.gameOver
    };
  }
  
  // const mapDispatchToProps = {
  //   finishGame
  // }
  
  export default connect(mapStateToProps, {gameOver})(Word)