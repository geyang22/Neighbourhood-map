import React from 'react';
import escapeRegExp from 'escape-string-regexp'

class Places extends React.Component {

state ={
  query:''
}


// A function to update the input the query state with the input
updateQuery=(query)=>{
  this.setState({query: query.trim()})
}

render(){
  const {myPlaces} = this.props
  // A function to update the list dynamically
  let showingPlaces
  if(this.state.query){
    const match = new RegExp(escapeRegExp(this.state.query), 'i')
    showingPlaces = this.props.myPlaces.filter((place)=>match.test(place.text))
  }else{
    showingPlaces = this.props.myPlaces
  }

  return(
    <div className="list">
    <div className='search'>
      <input type='text' placeholder='Search for places!' value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)}></input>
    </div>
    <ul>
    {showingPlaces.map((place)=>
    <li key={place.text.toString()}>{place.text}</li>
)
}
</ul>
</div>
)
}
}


export default Places;
