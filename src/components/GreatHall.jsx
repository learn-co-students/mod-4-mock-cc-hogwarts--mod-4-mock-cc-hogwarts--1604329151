import React from 'react';
import Wizard from './Wizard'

class GreatHall extends React.Component{

  render(){
    return (
      <section>
        <h2>Students of Hogwarts</h2>
        <ul className="cards">
          {this.props.wizards.map(wizard=> <Wizard key={wizard.id} wizard={wizard} graduateHandler={this.props.graduateHandler}/>)}
        </ul>
      </section>
    )
  }
}

export default GreatHall;
