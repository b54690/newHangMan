import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
// import PropTypes from 'prop-types'
import {gameEnd} from '../actions/game'
import swal from 'sweetalert2'


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
  
    const randomWord =  word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "★" : letter).join(" ")
  
  
    if( randomWord.indexOf('★') < 0 ) {
      swal({
        title: "You've been re-elected!!",
        imageUrl: 'https://i.gifer.com/2Yjo.gif',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
        animation: false,
        icon: "success"
      })
        this.props.gameEnd()
      }


  
    if(gameOver === true) {
      return word
    }
  
  
       console.log(randomWord, "randomWord")
       return randomWord
     }
  
     render() {
  
      return(
        <Paper>
        <p>{this.showGuess()}</p>
        </Paper>
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
  
  
  export default connect(mapStateToProps, {gameEnd})(Word)