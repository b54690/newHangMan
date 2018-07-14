import React, { Component } from 'react';
import NewGameButton from '../components/NewGameButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class Game extends Component {
  render() {
    return (
      <Paper className="container">
      <h3 className='title'> HANGMAN</h3>
      <NewGameButton />
      </Paper>
    );
  }
}