import React, {Component} from 'react';
import './App.css';
import ReactEcharts from "echarts-for-react";



import pp from './ejemplos/topo.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          ejemplos de echarts gallery
        </h1>
        <ReactEcharts option={pp}/>
      </div>
    );
  }
}

export default App;
