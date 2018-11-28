import React, {Component} from 'react';
import './App.css';

import Airport from './ejemplos/Airport.jsx'
import Api from './ejemplos/Api.jsx'
// import Calendar from './ejemplos/Calendar.jsx'
import Dynamic from './ejemplos/Dynamic.jsx'
import Events from './ejemplos/Events.jsx'
import Gauge from './ejemplos/Gauge.jsx'
import Gcalendar from './ejemplos/Gcalendar.jsx'
import Gl from './ejemplos/Gl.jsx'
import Graph from './ejemplos/Graph.jsx'
import Loading from './ejemplos/Loading.jsx'
import Lunar from './ejemplos/Lunar.jsx'
import Map from './ejemplos/Map.jsx'
import Simple from './ejemplos/Simple.jsx'
import Sunburst from './ejemplos/Sunburst.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          ejemplos de echarts-for-react
        </h1>

        <Sunburst/>
        <Simple/>
        <Map/>
        <Lunar/>
        <Loading/>
        <Graph/>
        <Gl/>
        <Gcalendar/>
        <Gauge/>
        <Events/>
        <Dynamic/>
        {/* <Calendar/> */}
        <Api/>
        <Airport/>
      </div>
    );
  }
}

export default App;
