import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    filterBy: "All"
  }

  componentDidMount(){
    fetch("http://localhost:4000/wizards")
    .then(response => response.json())
    .then(data => this.setState( {wizards: data} ))
  }

  handleCreateNewWizard = (wizard) => {
    console.log(wizard, "submitted")
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(wizard)
    }

    fetch("http://localhost:4000/wizards", options)
    .then(response => response.json())
    .then(data => this.setState( 
      prevState => ({wizards: [data, ...prevState.wizards]}) 
      ))
  }

  handleDeleteWizard = (wizard) => {
    console.log("deleting", wizard)
    let stillThere = this.state.wizards.filter( wiz => wiz.id !== wizard.id )
    let options = {
      method: "DELETE"
    }

    fetch(`http://localhost:4000/wizards/` + wizard.id, options)
    .then(response => response.json())
    .then(data => this.setState({
      wizards: stillThere
    }))
  }

  handleFilterChange = (e) => {
    this.setState({ filterBy:e.target.value})
  }

  filterWizards = () => {
    return this.state.filterBy === "All" ?
    this.state.wizards : this.state.wizards.filter(wiz => wiz.house === this.state.filterBy) 
  }

  render() {
    return (
      <main>
        <MaraudersMap handleFilterChange={this.handleFilterChange} />
        <GreatHall wizards={this.filterWizards()} handleDeleteWizard={this.handleDeleteWizard} />
        <SortingHat handleCreateNewWizard={this.handleCreateNewWizard} />
      </main>
    )
  }

}

export default Hogwarts;
