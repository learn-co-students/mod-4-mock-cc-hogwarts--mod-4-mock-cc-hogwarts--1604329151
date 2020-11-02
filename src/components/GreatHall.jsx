import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  const renderWizards =  () => {
    return props.wizards.map( wiz => <Wizard deleteHandler={props.deleteHandler} key={wiz.id} wizard={wiz}/>)
  }
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {renderWizards()}
      </ul>
    </section>
  )
}

export default GreatHall;
