import React, {Component} from 'react';
import './App.css';

import Simple from './ejemplos/Simple.jsx'
import Airport from './ejemplos/Airport.jsx'
import Api from './ejemplos/Api.jsx'
// import Calendar from './ejemplos/Calendar.jsx'
import Dynamic from './ejemplos/Dynamic.jsx'
import Events from './ejemplos/Events.jsx'
import Gauge from './ejemplos/Gauge.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          ejemplos de echarts-for-react
        </h1>
        <Gauge/>
        <Events/>
        <Dynamic/>
        {/* <Calendar/> */}
        <Api/>
        <Airport/>
        <Simple/>
      </div>
    );
  }
}

export default App;
