// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {gameOver} from '../actions/game';
// import Paper from '@material-ui/core/Paper';
// import swal from 'sweetalert'


// class Word extends Component {
//     constructor(props) {
//         super(props);

//     this.state = {
//         gameOver: false,
//     };
// }

// showGuesses() {
//     const word = this.props.word
//     const guesses = this.props.guesses
//     const gameOver = this.props.gameOver
//     const randomWord = word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ")

//     if(randomWord.indexOf('_')< 0) {
//         swal("You're not gonna get hung", {
//             icon: "success"
//         })

//         this.props.gameOver()
//     }

//     if(gameOver === true) {
//         return word
//     }

//     return randomWord
// }


// render() {

//     return(
//         <Paper>
//             <p className="ShowGame">{this.showGuesses()}</p>
//         </Paper>
//     )
// }



// }


// function mapStateToProps(state) {
//     return {
//         word: state.newGame,
//         guesses: state.guesses,
//         gameOver: state.gameOver
//     }
// }

// export default connect(mapStateToProps, {gameOver})(Word)