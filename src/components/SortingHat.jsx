import React, { Component } from 'react';

class SortingHat extends Component {
  
  state = {
    name: "",
    wand: "",
    house: "",
    image1: "",
    image2: ""
  }

  formHandler = (e) => {
    this.setState({[e.target.name] : e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addWizard(this.state)
    this.setState({name: "",
    wand: "",
    house: "",
    image1: "",
    image2: ""})
  }

  render() {

    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.submitHandler}>

          <label htmlFor="name">Name:</label>
          <input onChange={this.formHandler} type="text" name="name" id="name" value={this.state.name}/>

          <label htmlFor="wand">Wand:</label>
          <input onChange={this.formHandler} type="text" name="wand" id="wand" value={this.state.wand}/>

          <label htmlFor="house">House:</label>
          <select onChange={this.formHandler} name="house" id="house" value={this.state.house}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input onChange={this.formHandler} type="url" name="image1" id="image1" value={this.state.image1}/>

          <label htmlFor="image2">Image 2:</label>
          <input onChange={this.formHandler} type="url" name="image2" id="image2" value={this.state.image2}/>

          <input onChange={this.formHandler} type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;
