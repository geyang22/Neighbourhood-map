import React from 'react'

class Places extends React.Component {


render(){
  const {myPlaces} = this.props
  console.log(myPlaces)
  return(
    <ul>
    {myPlaces.map((place)=>
    <li key={place.text.toString()}>{place.text}</li>
)
}
</ul>
)
}
}


export default Places;
