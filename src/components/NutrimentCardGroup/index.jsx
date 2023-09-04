import PropTypes from 'prop-types';
import NutrimentCard from '../NutrimentCard';
import React from 'react';

const nutrimentsName = {
  calories: 'Calories',
  proteins: 'Protéines',
  carbohydrates: 'Glucides',
  lipids: 'Lipides',
};

const nutrimentsIcon = {
  calories: '/assets/energy.svg',
  proteins: '/assets/chicken.svg',
  carbohydrates: '/assets/apple.svg',
  lipids: '/assets/cheeseburger.svg',
};

const nutrimentsUnit = {
  calories: 'kCal',
  proteins: 'g',
  carbohydrates: 'g',
  lipids: 'g',
};

const NutrimentCardGroup = ({ nutriments }) => {
  return (
    <React.Fragment>
      {Object.keys(nutriments).map((nutriment, index) => {
        return (
          <NutrimentCard
            key={index}
            nutriment={nutrimentsName[nutriment]}
            value={nutriments[nutriment]}
            unit={nutrimentsUnit[nutriment]}
            icon={nutrimentsIcon[nutriment]}
          />
        );
      })}
    </React.Fragment>
  );
};

NutrimentCardGroup.propTypes = {
  nutriments: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    lipids: PropTypes.number.isRequired,
  }).isRequired,
};

export default NutrimentCardGroup;
