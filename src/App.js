import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Places from "./My places"
import escapeRegExp from 'escape-string-regexp'


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
    query: '',
    markers: []
  }



componentDidMount() {
    this.renderMap()
}

renderMap = () => {
            loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDoVTAZeYX-uLrPxAiAJ_Uu5P07Hrl3CTM&callback=initMap")
            window.initMap = this.initMap
}

initMap = () => {
        //Initiate the map
         const map = new window.google.maps.Map(document.getElementById('map'), {
           center: {lat: 52.231838, lng: 21.005995},
           zoom: 16
         })
       // Generate the markers
         this.state.myPlaces.map(place => {
    		const marker = new window.google.maps.Marker({
      		position: {lat: place.lat , lng: place.lng},
     		map: map,
      		title: place.text,
     })
     //marker.addListener('click', this.toggleBounce);
           this.setState({
  markers: this.state.markers.concat(marker)
})
     })
             console.log(this.state.markers)
  }

// A function to update the input the query state with the input
updateQuery=(query)=>{
  this.setState({query: query.trim()})
}

// toggleBounce=(marker)=>{
//        if (marker.getAnimation() !== null) {
//          marker.setAnimation(null);
//        } else {
//          marker.setAnimation(window.google.maps.Animation.BOUNCE);
//        }
//      }


  render() {
    return (
      <div className="container" style={{width: '100%'}}>
      <div id='map'></div>
      <div>
      <Places myPlaces={this.state.myPlaces} query={this.state.query} updateQuery={this.updateQuery}
        markers={this.state.markers} ></Places>
      </div>
      </div>
    )
  }
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default Map;
