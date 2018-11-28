import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Simple from './ejemplos/Simple.jsx'
import Airport from './ejemplos/Airport.jsx'
// import Simple from './ejemplos/Simple.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          ejemplos de echarts-for-react
        </h1>
        <Airport/>
        <Simple/>
      </div>
    );
  }
}

export default App;
