import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <section className="pokemons">
        <h2>{ name }</h2>
        <h4>{ type }</h4>
        <h4>{`Average Weight: ${ averageWeight.value } ${ averageWeight.measurementUnit}` }</h4>
        <img src={ image } alt={ `${name} sprite` } />
      </section>
    )
  }
}


Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
   }),
  image: PropTypes.string,
  }).isRequired,
};

export default Pokemon