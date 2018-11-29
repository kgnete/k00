import React, {Component} from 'react';
import './App.css';

// import Airport from './ejemplos/Airport.jsx'
// import Api from './ejemplos/Api.jsx'
// // import Calendar from './ejemplos/Calendar.jsx'
// import Dynamic from './ejemplos/Dynamic.jsx'
// import Events from './ejemplos/Events.jsx'
// import Gauge from './ejemplos/Gauge.jsx'
// import Gcalendar from './ejemplos/Gcalendar.jsx'
// import Gl from './ejemplos/Gl.jsx'
// import Graph from './ejemplos/Graph.jsx'
// import Loading from './ejemplos/Loading.jsx'
// import Lunar from './ejemplos/Lunar.jsx'
import Map from './ejemplos/Map.jsx'
// import Map1 from './ejemplos/Map.1.jsx'
// import Simple from './ejemplos/Simple.jsx'
// import Sunburst from './ejemplos/Sunburst.jsx'
// import Svg from './ejemplos/Svg.jsx'
// import Theme from './ejemplos/Theme.jsx'
// import Treemap from './ejemplos/Treemap.jsx'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          ejemplos de echarts-for-react
        </h1>
        {/* <Dynamic/>

        <Treemap/>
        <Theme/>
        <Svg/>
        <Sunburst/>
        <Simple/> */}
        {/* <Map1/> */}
        <Map/>
        {/* <Lunar/>
        <Loading/>
        <Graph/>
        <Gl/>
        <Gcalendar/>
        <Gauge/>
        <Events/> */}

        {/* <Dynamic/> */}
        {/* <Calendar/> */}
        {/* <Api/>
        <Airport/> */}
      </div>
    );
  }
}

export default App;
