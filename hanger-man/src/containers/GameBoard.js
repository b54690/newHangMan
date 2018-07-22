import React, { Component } from 'react';
import NewGameButton from '../components/NewGameButton';
import Letters from '../components/GameLetters'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Word from '../components/GameWord'
import GameLogic from '../components/GameLogic'
import HangedMan from '../components/Hangman'
import './GameBoard.css'

export default class Game extends Component {
  render() {
    return (
      <Paper className="container">
      <h3 className='title'> HANGMAN</h3>
      <Word/>
      <HangedMan/>
      <Letters/>
      <GameLogic/>
      <NewGameButton />
      </Paper>
    );
  }
}