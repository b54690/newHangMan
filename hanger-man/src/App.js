import React, { Component } from 'react';
import './App.css';
// import Word from './components/gameWord'
import NewGameButton from './components/newGameButton'




class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Word /> */}
        <NewGameButton/>
      </div>
    );
  }
}

export default App;

