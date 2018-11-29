import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import ReactEcharts from "echarts-for-react";

import Mountain from './ejemplos/mountain.js'
import River from './ejemplos/river.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ejemplos de https://github.com/jackshawn/pics-by-echarts</h1>
        
        
        < River />
        < Mountain />


      </div>
    );
  }
}

export default App;
