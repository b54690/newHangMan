import React, {Component} from 'react';
import alphabet from '../lib/alphabet'
import {makeGuess} from '../actions/game'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import './hangman.css'

class Letters extends Component {

  handleBtnClick(letter) {
    this.props.makeGuess(letter);
  }

  render() {
    return (
      <div className="keyboardBox">
      {alphabet.map( (letter, index) =>
          <Button
              className="keyboard"
              size="large"
              color="primary"
              variant="contained"
              type="button"
              key={index}
              onClick={() => this.handleBtnClick(letter)}
              disabled={this.props.guesses.includes(letter) || this.props.gameOver === true }
              >
              {letter}
          </Button>
      )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  guesses: state.guesses,
  gameOver: state.gameOver
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ makeGuess }, dispatch);
// }

export default connect(mapStateToProps, {makeGuess})(Letters)