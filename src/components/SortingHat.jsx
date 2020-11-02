import React, { Component } from 'react';

class SortingHat extends Component {

  render() {

    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container">

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name"/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand"/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1"/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2"/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;
