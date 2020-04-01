import React, { Component } from 'react';
import './App.css';
import './UserInput/userInput.css';
import UserInput from './UserInput/userInput';
import UserOutput from './UserOutput/userOutput';

class App extends Component {

  constructor() {
    super();
    this.state = {
        word1: "look",
      };
  }

  randomWord = () => {
    this.setState({
      word1: "tree"
    });
  }

  changeWord = (event) => {
    this.setState({
      word1: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Sight Words Worksheets!</h1>
        <p>This is a small project I created to help preschool teachers make custom worksheets for their students.</p>
        <p>The worksheet this page creates is the Trace, Stamp, Write worksheet. Simply enter 4 words on the left and watch the worksheet be generated on the right.</p>
        <button onClick={this.randomWord}>Click here to generate a random word</button>
        <div className="clearDiv"></div>
        <div className="half">
          <UserInput changeWord={this.changeWord} word={this.state.word1}/>
        </div>
        <div className="half">
          <UserOutput word={this.state.word1}/>
        </div>
      </div>
    );
  }
  
}

export default App;
