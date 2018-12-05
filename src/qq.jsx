import React, { Component } from 'react';

import { Map, Marker, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { connect } from 'react-redux';
import './style.css';

import { setPoint, fetchData } from '../../actions/map';

@connect(store => {
  return {
    map: store.map
  }
})
class MyMap extends Component {

  mapClick(e) {
    this.props.dispatch(setPoint(e.latlng));
    this.props.dispatch(fetchData(e.latlng));
  }

  render() {
    const marker = () => {
      if(this.props.map.point) {
        return <Marker position={this.props.map.point} />;
      }
    };

    const data = () => {
        if(this.props.map.data.length > 0) {
            const json = this.props.map.data;
            return <GeoJSON data={json} />
        }
    }

    return (
      <div className='my-map'>
        <div className='my-map__map-container'>
          <Map center={this.props.map.center} zoom={13} onClick={this.mapClick.bind(this)}>
            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            {marker()}
            {data()}
          </Map>
        </div>
        <div className='my-map__debug'>
            {JSON.stringify(this.props.map)}
        </div>
      </div>
    );
  }
}

export default MyMap;