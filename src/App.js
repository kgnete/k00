import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactEcharts from "echarts-for-react";

import option1 from './ejemplos/BasicLineChart.jsx'
import option2 from './ejemplos/Basicareachart.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ejemplos de https://ecomfe.github.io/echarts-examples/public/index.html</h1>
        <ReactEcharts option={option2}/>

        <ReactEcharts option={option1}/>
      </div>
    );
  }
}

export default App;
