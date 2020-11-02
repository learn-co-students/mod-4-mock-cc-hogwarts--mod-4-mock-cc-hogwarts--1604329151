import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    clicked: true
  }

  clickHandler = () => {
    this.setState(prev => ({clicked: !prev.clicked}))
  }

  render() {
    return (
        <li className={`card ${"HOUSE HERE"}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.wizard.name}</h3>
              </div>
              <div className="border">
                <img onClick={this.clickHandler} src={this.state.clicked ? this.props.wizard.image1 : this.props.wizard.image2} alt={this.props.wizard.name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.wizard.house}</p>
              <p className="description">Wand: {this.props.wizard.wand}</p>
              <button>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
