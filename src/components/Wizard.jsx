import React, { Component } from 'react';

class Wizard extends Component {

  state = ({
    clicked: false
  })

  imageHandler = () => {
    return this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
        <li className={`card ${"HOUSE HERE"}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.student.name}</h3>
              </div>
              <div className="border">
                <img onClick={this.imageHandler} src={this.state.clicked ? this.props.student.image2 : this.props.student.image1} alt={this.props.student.name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.student.house}</p>
              <p className="description">Wand: {this.props.student.wand}</p>
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
