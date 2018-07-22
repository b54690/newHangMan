import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import hangman from './hangman.png'
import './Hangman.css'

class HangedMan extends PureComponent {

    showPic() {
        const word = this.props.word
        const guesses = this.props.guesses
    
        const count = guesses.filter(guess => word.indexOf(guess) < 0).length
    
        if (count === 0) {
            return <img id="mann" src={hangman} style={{left: -0}} alt="start"/>
            }
    
        if (count === 1 ) {
            return <img id="mann" src={hangman} style={{left: -75}} alt="1 mistake"/>
            }
    
        if( count === 2 ) {
            return <img id="mann" src={hangman} style={{left: -150}} alt="2 mistakes"/>
            }
    
        if( count === 3 ) {
            return <img id="mann" src={hangman} style={{left: -225}} alt="3 mistakes"/>
            }
    
        if ( count === 4 ) {
            return <img id="mann" src={hangman} style={{left: -300}}alt="4 mistakes"/>
            }
        
        if ( count === 5 ) {
            return <img id="mann" src={hangman} style={{left: -375}}alt="5 mistakes"/>
            }
        
        if( count === 6 ) {
            return <img id="mann" src={hangman} style={{left: -450}} alt="game over!"/>
            }
    }

    render() {

        return (

            <div id="leftBox">
                <div>{this.showPic()}</div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        word: state.gameWord,
        guesses: state.guesses
    };
  }

export default connect(mapStateToProps)(HangedMan)

