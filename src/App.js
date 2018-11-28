import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactEcharts from "echarts-for-react";
import BasicLineChart from './ejemplos/BasicLineChart.jsx'
import Basicareachart from './ejemplos/Basicareachart.jsx'
import arearainfall from './ejemplos/area-rainfall.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ejemplos de https://ecomfe.github.io/echarts-examples/public/index.html</h1>
        
        
        <ReactEcharts option={arearainfall}/>
        <ReactEcharts option={Basicareachart}/>
        <ReactEcharts option={BasicLineChart}/>
      </div>
    );
  }
}

export default App;
