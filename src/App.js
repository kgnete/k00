import React, {Component} from 'react';
import './App.css';
import ReactEcharts from "echarts-for-react";


import dibujo from './ejemplos/dibujo.js'

import geo from './ejemplos/geo.js'
import foto from './ejemplos/topo.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          ejemplos de echarts gallery
        </h1>
        <ReactEcharts option={dibujo}/>
        <ReactEcharts option={geo}/>
        <ReactEcharts option={foto}/>
      </div>
    );
  }
}

export default App;
