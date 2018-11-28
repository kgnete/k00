import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactEcharts from "echarts-for-react";

import areabasic from './ejemplos/area-basic.js'
import arearainfall from './ejemplos/area-rainfall.js'
// import areasimple from './ejemplos/area-simple.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ejemplos de https://github.com/ecomfe/echarts-examples/tree/gh-pages/public/data</h1>
        
        
        {/* <ReactEcharts option={areasimple}/> */}
        <ReactEcharts option={arearainfall}/>
        <ReactEcharts option={areabasic}/>
      </div>
    );
  }
}

export default App;
