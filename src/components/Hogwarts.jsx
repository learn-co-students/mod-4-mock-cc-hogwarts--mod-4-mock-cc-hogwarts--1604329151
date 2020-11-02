import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {
  state = {
    wizards: []
  }

  componentDidMount(){
    console.log("CDM Hogwarts")
    fetch("http://localhost:4000/wizards")
      .then(resp=>resp.json())
      .then(data=>{
        this.setState({wizards: data})
      })
  
  }
  render() {
    console.log(this.state.wizards)
    return (
      <main>
        <MaraudersMap/>
        <GreatHall wizards={this.state.wizards}/>
        <SortingHat/>
      </main>
    )
  }

}

export default Hogwarts;
