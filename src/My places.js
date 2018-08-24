import React from 'react';
import escapeRegExp from 'escape-string-regexp'

class Places extends React.Component {

// state ={
//   query:''
// }


// A function to update the input the query state with the input
// updateQuery=(query)=>{
//   this.setState({query: query.trim()})
// }

render(){
  const {myPlaces, query, markers} = this.props
  // A function to update the list and markers dynamically
  let showingPlaces, showingMarkers
  if(query){
	markers.map((marker)=>{marker.setVisible(false)})
    const match = new RegExp(escapeRegExp(query), 'i')
    showingPlaces = myPlaces.filter((place)=>match.test(place.text))
    showingMarkers = markers.filter((marker)=>match.test(marker.title))
   	showingMarkers.map((marker)=>{marker.setVisible(true)})
  }else{
    showingPlaces = myPlaces
    showingMarkers = markers
    showingMarkers.map((marker)=>{marker.setVisible(true)})
  }



  return(
    <div className="list">
    <div className='search'>
      <input type='text' placeholder='Search for places!' value={this.props.squery} onChange={(event)=>this.props.updateQuery(event.target.value)}></input>
    </div>
    <ul>
    {showingPlaces.map((place)=>
    <li key={place.text.toString()} id={place.text.toString()}>{place.text}</li>
)
}
</ul>
</div>
)
}
}


export default Places;
