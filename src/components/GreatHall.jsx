import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {props.wizards.map(wiz => <Wizard
          key={wiz.id}
          name={wiz.name}
          wand={wiz.wand}
          house={wiz.house}
          img1={wiz.image1}
          img2={wiz.image2}
        />)
        }
      </ul>
    </section>
  )
}

export default GreatHall;
