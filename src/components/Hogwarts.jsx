import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    filter: "All"
  }

  deleteHandler =(wizard) => {
    const index = this.state.wizards.findIndex( wiz => wiz.id === wizard.id)
    const newWizards = [...this.state.wizards]
    newWizards.splice(index, 1)
    const configObj = {
      method: "DELETE",
      headers: {
        "content-type" : "application/json",
        accept: "application/json"
      }
    }
    fetch(`http://localhost:4000/wizards/${wizard.id}`, configObj)
    .then(res => res.json())
    .then(this.setState({wizards: newWizards}))
    .catch(console.log)
  }

  componentDidMount() {
    fetch(`http://localhost:4000/wizards`)
    .then(res => res.json())
    .then(res => this.setState( () => ({wizards: res})))
  }

  addWizard = (wizard) => {
    const configObj = {
      method: "POST",
      headers: {
        "content-type" : "application/json",
        accept: "application/json"
      }, 
      body: JSON.stringify(wizard)
    }

    fetch(`http://localhost:4000/wizards`, configObj)
    .then(res => res.json())
    .then(res => this.setState( prev => ({wizards: [...prev.wizards, res]})))
  }

  filterWizards = () => {
    if (this.state.filter === "All") {
      return this.state.wizards
    } else {
      return this.state.wizards.filter( wiz => wiz.house === this.state.filter)
    }
  }
  
  getFilter = term => {
    this.setState({filter: term})
  }

  render() {
    return (
      <main>
        <MaraudersMap filter={this.getFilter}/>
        <GreatHall deleteHandler={this.deleteHandler} wizards={this.filterWizards()}/>
        <SortingHat addWizard={this.addWizard}/>
      </main>
    )
  }

}

export default Hogwarts;
