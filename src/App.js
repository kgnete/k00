import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactEcharts from "echarts-for-react";
import BasicLineChart from './ejemplos/BasicLineChart.jsx'
import Basicareachart from './ejemplos/Basicareachart.jsx'
import arearainfall from './ejemplos/area-rainfall.jsx'
// import dynamicdata2 from './ejemplos/dynamic-data2.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ejemplos de https://github.com/ecomfe/echarts-examples/tree/gh-pages/public/data</h1>
        
        
        {/* <ReactEcharts option={dynamicdata2}/> */}
        <ReactEcharts option={arearainfall}/>
        <ReactEcharts option={Basicareachart}/>
        <ReactEcharts option={BasicLineChart}/>
      </div>
    );
  }
}

export default App;
