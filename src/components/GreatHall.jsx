import React from 'react';
import Wizard from './Wizard'

const GreatHall = props => {

  const renderStudents = () => {
    let allStudents = props.students
    return allStudents.map(student => <Wizard graduateStudent={props.graduateStudent} key={student.id} student={student}/>)
  }
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {renderStudents()}
      </ul>
    </section>
  )
}

export default GreatHall;
