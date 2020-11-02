import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  const renderWizard = () => {
    return props.wizards.map(wizard => <Wizard key={wizard.id} wizard={wizard} deleteHandler={props.deleteHandler} />)
  }

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {renderWizard()}
      </ul>
    </section>
  )
}

export default GreatHall;
