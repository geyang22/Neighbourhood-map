import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Places from "./My places"


class Map extends Component {
//Store my favourite places
  state = {
    myPlaces: [
      {
        lat: 52.2299756,
        lng: 21.0025774,
        text: "Złote Tarasy"
      },
      {
        lat: 52.2322737,
        lng: 21.0084045,
        text: "Plac Defilad"
      },
      {
        lat: 52.2360099,
        lng: 21.011496,
        text: "Aioli"
      },
      {
        lat: 52.2316019,
        lng: 21.0125279,
        text: "Kino Atlantyk"
      },
      {
        lat: 52.2302091,
        lng: 21.0113922,
        text: "Metro Centrum"
      }
    ],
  }
//Definde the center of the map and zoom
  static defaultProps = {
    center: {
      lat: 52.231838,
      lng : 21.005995
    },
    zoom: 16
  };

//Define variables needed
constructor(props) {
          super(props);
          this.myLatLng= '';
          this.marker='';
      }

// A function to render markers
renderMarkers(map, maps) {
  this.state.myPlaces.map((place)=>(
  this.myLatLng = {lat: place.lat, lng: place.lng},
  this.marker = new maps.Marker({
    position: this.myLatLng,
    map,
    title: place.text
  })
))
}


  render() {
    return (
      <div className="container" style={{width: '100%'}}>
      <div style={{ height: '100vh', width: '75%', float:'right' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDoVTAZeYX-uLrPxAiAJ_Uu5P07Hrl3CTM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
      <div>
      <Places myPlaces={this.state.myPlaces}></Places>
      </div>
    </div>
    );
  }
}

export default Map;
