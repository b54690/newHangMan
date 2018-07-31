import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import hangman from './hangman.png'
import Trump_0 from './Trump-0.jpg'
import Trump_1 from './Trump-1.jpg'
import Trump_2 from './Trump-2.jpg'
import Trump_3 from './Trump-3.jpg'
import Trump_4 from './Trump-4.jpg'
import Trump_5 from './Trump-5.jpg'
import Trump_6 from './Trump-6.jpg'
import Trump_7 from './Trump-7.jpg'
import './Hangman.css'

class HangedMan extends PureComponent {

    showPic() {
        const word = this.props.word
        const guesses = this.props.guesses
    
        const count = guesses.filter(guess => word.indexOf(guess) < 0).length
    
        if (count === 1 ) {
            return <img id="mann" src={Trump_1}  alt="1 mistake"/>
            }
    
        if( count === 2 ) {
            return <img id="mann" src={Trump_2}  alt="2 mistakes"/>
            }
    
        if( count === 3 ) {
            return <img id="mann" src={Trump_3}  alt="3 mistakes"/>
            }
    
        if ( count === 4 ) {
            return <img id="mann" src={Trump_4}  alt="4 mistakes"/>
            }
        
        if ( count === 5 ) {
            return <img id="mann" src={Trump_5} alt="5 mistakes"/>
            }
        
        if( count === 6 ) {
            return <img id="mann" src={Trump_6}  alt="6 mistakes"/>
            }

        if( count === 7 ) {
            return <img id="mann" src={Trump_7}  alt="game over!"/>
            }
    }

    render() {

        return (

            <div id="hanging">
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

