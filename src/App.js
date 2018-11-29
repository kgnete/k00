import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactEcharts from "echarts-for-react";






import mapchina from './ejemplos/map-china.js'
import areabasic from './ejemplos/area-basic.js'
import arearainfall from './ejemplos/area-rainfall.js'
// import areasimple from './ejemplos/area-simple.js'
import areastack from './ejemplos/area-stack.js'
import multipleyaxis from './ejemplos/multiple-y-axis.js'
// import dynamicdata from './ejemplos/dynamic-data.js'
// import mappolygon from './ejemplos/map-polygon.js'
import mapworlddataRange from './ejemplos/map-world-dataRange.js'
import geolines from './ejemplos/geo-lines.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ejemplos de https://github.com/ecomfe/echarts-examples/tree/gh-pages/public/data</h1>
        
        <ReactEcharts option={mapchina}/>
        <ReactEcharts option={geolines}/>
        <ReactEcharts option={mapworlddataRange}/>
        {/* <ReactEcharts option={mappolygon}/> */}
        {/* <ReactEcharts option={dynamicdata}/> */}
        <ReactEcharts option={multipleyaxis}/>
        <ReactEcharts option={areastack}/>
        {/* <ReactEcharts option={areasimple}/> */}
        <ReactEcharts option={arearainfall}/>
        <ReactEcharts option={areabasic}/>
      </div>
    );
  }
}

export default App;
