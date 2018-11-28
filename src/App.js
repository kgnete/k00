import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactEcharts from "echarts-for-react";

import option1 from './ejemplos/BasicLineChart.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            git checkout b0
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <ReactEcharts option={option1}/>
      </div>
    );
  }
}

export default App;
