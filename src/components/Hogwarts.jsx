import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {
  state = {
    wizards: [],
    filterWizards: []
  }

  componentDidMount(){
    fetch('http://localhost:4000/wizards')
    .then(resp => resp.json())
    .then(wizards => {
      this.setState({wizards: wizards})
      this.setState({filterWizards: wizards})
    })
  }

  selectHouse = (house) => {
    if(house === 'All'){
      this.setState({filterWizards: this.state.wizards})
      console.log(this.state.filterWizards);
    }else{
      const select = this.state.wizards.filter(wizard => wizard.house === house)
      this.setState({filterWizards: select})
    }
  }

  submitHandler = (obj) =>{
    const options = {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'accepts':'application/json'
      },
      body: JSON.stringify(obj)
    }

    fetch('http://localhost:4000/wizards', options)
    .then(resp => resp.json())
    .then(wizard => {
      this.setState(prevState=>{
        return {wizards: [...prevState.wizards, wizard]}
      })
      this.setState(prevState=>{
        return {filterWizards: this.state.wizards}
      })
    })
  }
  deleteHandler = (id) => {
    const wizards = this.state.wizards.filter(wizard => wizard.id !== id)
    this.setState({wizards: wizards})
    this.setState({filterWizards: this.state.wizards})
  }

  render() {
    return (
      <main>
        <MaraudersMap selectHouse={this.selectHouse}/>
        <GreatHall wizards={this.state.filterWizards} deleteHandler={this.deleteHandler}/>
        <SortingHat submit={this.submitHandler}/>
      </main>
    )
  }

}

export default Hogwarts;
