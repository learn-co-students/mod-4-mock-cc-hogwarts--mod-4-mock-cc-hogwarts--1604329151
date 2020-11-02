import React, { Component } from 'react';

class Wizard extends Component {
  state = {
    img: this.props.img1,
    imageClicked: false
  }
  
  clickHandler = (e) => {
    console.log(e.target)
    console.log("clicked", this.state.imageClicked)

    this.setState({
      imageClicked: !this.state.imageClicked
    })
    this.changeImage()
    console.log("clicked", this.state.imageClicked)
  }
  
  

  changeImage = () => {
    {this.state.imageClicked ? 
      this.setState({img: this.props.img2}) :
      this.setState({img: this.props.img1})}
  } 
   

    // {this.state.imageClicked ? this.setState({img: this.props.img2}) : this.setState({img: this.props.img1})}
  
  render() {
    return (
        <li className={`card ${this.props.hosue}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.name}</h3>
              </div>
              <div className="border">
                <img onClick={e=>this.clickHandler(e)} src={this.state.img} alt={this.props.name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.house}</p>
              <p className="description">Wand: {this.props.wand}</p>
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
