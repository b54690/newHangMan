import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'
import './NewGameButton.css'

class NewGameButton extends PureComponent {

  startGame = () => {
   this.props.newGame()
 }

  render() {
      return(
        <button
          onClick={this.startGame.bind(this)}
          id="newGame"
          >
          New game!
        </button>
      )
    }
}

export default connect(null, {newGame})(NewGameButton)