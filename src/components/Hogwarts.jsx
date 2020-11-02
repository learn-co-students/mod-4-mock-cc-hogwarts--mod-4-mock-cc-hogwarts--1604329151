import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = ({
    students: [],
    filter: ""
  })

  graduateStudent = student => {
    let studentId = student.id

    let options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      }
    }

    fetch("http://localhost:4000/wizards/" + student.id, options)
    .then(resp => resp.json())
    .then(student => {
      let oldStudents = this.state.students
      let undergrads = oldStudents.filter(wizard => wizard.id != studentId)
      this.setState({
        students: undergrads
      })
    })

  }

  filterHandler = event => {

    this.setState({
      filter: event.target.value
    })

  }

  submitHandler = event => {
    event.preventDefault()

    let newWizard = {
      name: event.target.name.value,
      wand: event.target.wand.value,
      house: event.target.house.value,
      image1: event.target.image1.value,
      image2: event.target.image2.value
    }

    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newWizard)
    }

    fetch("http://localhost:4000/wizards", options)
    .then(resp => resp.json())
    .then(student => {
      this.setState({
        students: [...this.state.students, student]
      })
    })

  }

  displayStudents = () => {
    let students = this.state.students

    if(this.state.filter === "All") {
      return students
    } else {
      return students.filter(student => student.house.includes(this.state.filter))
    }

  }

  componentDidMount = () => {

    fetch("http://localhost:4000/wizards")
    .then(resp => resp.json())
    .then(students => {
      this.setState({
        students: students
      })
    })

  }

  render() {
    return (
      <main>
        <MaraudersMap filterHandler={this.filterHandler}/>
        <GreatHall graduateStudent={this.graduateStudent} students={this.displayStudents()}/>
        <SortingHat submitHandler={this.submitHandler}/>
      </main>
    )
  }

}

export default Hogwarts;
