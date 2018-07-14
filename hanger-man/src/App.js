import React, { Component } from 'react';
import './App.css';
// import Word from './components/gameWord'
import GameBoard from './containers/GameBoard'




class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Word /> */}
        <GameBoard/>
      </div>
    );
  }
}

export default App;

