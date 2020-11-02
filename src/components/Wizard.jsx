import React, { Component } from 'react';

class Wizard extends Component {

  state={
    clicked: false,
    image: this.props.wizard.image1
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
    this.state.clicked ? this.setState({image: this.props.wizard.image1}) : this.setState({image: this.props.wizard.image2})
  }

  deleteWizard = (e) => {
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`, {
      method: 'DELETE'
    }).then(resp => resp.json()).then(_ => this.props.deleteHandler(this.props.wizard.id))

  }

  render() {
    const wizard = this.props.wizard
    return (
        <li className={`card ${wizard.house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{wizard.name}</h3>
              </div>
              <div className="border">
                <img src={this.state.image} alt={wizard.name} onClick={this.clickHandler}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{wizard.house}</p>
              <p className="description">Wand: {wizard.wand}</p>
              <button onClick={this.deleteWizard}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
