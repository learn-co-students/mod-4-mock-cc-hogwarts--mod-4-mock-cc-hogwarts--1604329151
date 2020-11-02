import React, { Component } from 'react';

class SortingHat extends Component {
  state={
    name:'',
    wand:'',
    house:'',
    image1:'',
    image2:''
  }


  submitHandler = e =>{
    e.preventDefault()
    const options={
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        wand:this.state.wand,
        house:this.state.house,
        image1:this.state.image1,
        image2: this.state.image2
      })
    }
    fetch('http://localhost:4000/wizards',options)
    .then(resp=>resp.json())
    .then(wizard=>this.props.newWizard(wizard))
    this.setState({name:'',wand:'',house:'',image1:'',image2:''})
  }

  changeHandler = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.submitHandler}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.changeHandler}/>
          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand" value={this.state.wand} onChange={this.changeHandler}/>
          <label htmlFor="house">House:</label>
          <select name="house" id="house" value={this.state.house} onChange={this.changeHandler}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>
          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1" value={this.state.image1} onChange={this.changeHandler}/>
          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2" value={this.state.image2} onChange={this.changeHandler}/>
          <input type="submit" value="Log A New Wizard"/>
        </form>
      </section>
    );
  }

}

export default SortingHat;
