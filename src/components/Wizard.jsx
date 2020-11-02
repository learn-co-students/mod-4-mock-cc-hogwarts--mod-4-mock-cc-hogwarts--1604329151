import React, { Component } from 'react';

class Wizard extends Component {
  state = {
    image1: true
  }

  handleImageClick = () => {
    this.setState( prevState => ({
      image1: !prevState.image1
    }))
  }

  handleDeleteClick = () => {
    this.props.handleDeleteWizard(this.props.wizard)
  }

  render() {
    return (
        <li className={`card ${this.props.wizard.house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.wizard.name}</h3>
              </div>
              <div className="border">
                <img 
                  onClick={this.handleImageClick}
                  src={ this.state.image1 ?
                  this.props.wizard.image1 : this.props.wizard.image2
                  } alt={this.props.wizard.name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.wizard.house}</p>
              <p className="description">Wand: {this.props.wizard.wand}</p>
              <button onClick={this.handleDeleteClick} >
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
