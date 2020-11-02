import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {
  state={
    wizards: [],
    filter:'All',
    new: []
  }

  componentDidMount(){
    fetch('http://localhost:4000/wizards')
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({wizards:data})
    })
  }

  newWizard = wizard =>{
    this.setState({wizards:[...this.state.wizards, wizard]})
  }

  searchHandler = e =>{
    this.setState({filter: e.target.value})
  }

  filteredContent = () =>{
    if(this.state.filter !== 'All'){
      return this.state.wizards.filter(wizard=> wizard.house.includes(this.state.filter))
    }else{
      return this.state.wizards
    }
  }

  graduateHandler = (wizardId) =>{
    const options = {
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
    fetch(`http://localhost:4000/wizards/${wizardId}`,options)
    .then(resp=>resp.json())
    this.setState({wizards: [...this.state.wizards].filter(wizard=> wizard.id !== wizardId)})
  }

  render() {
    return (
      <main>
        <MaraudersMap filter={this.state.filter} searchHandler={this.searchHandler}/>
        <GreatHall wizards={this.filteredContent()} graduateHandler={this.graduateHandler}/>
        <SortingHat newWizard={this.newWizard}/>
      </main>
    )
  }

}

export default Hogwarts;
