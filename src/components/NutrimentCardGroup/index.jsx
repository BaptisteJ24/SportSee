import PropTypes from 'prop-types';
import NutrimentCard from '../NutrimentCard';
import React from 'react';

const nutrimentsName = {
  calorieCount: 'Calories',
  proteinCount: 'Protéines',
  carbohydrateCount: 'Glucides',
  lipidCount: 'Lipides',
};

const nutrimentsIcon = {
  calorieCount: './../src/assets/energy.svg',
  proteinCount: './../src/assets/chicken.svg',
  carbohydrateCount: './../src/assets/apple.svg',
  lipidCount: './../src/assets/cheeseburger.svg',
};

const nutrimentsUnit = {
  calorieCount: 'kCal',
  proteinCount: 'g',
  carbohydrateCount: 'g',
  lipidCount: 'g',
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
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default NutrimentCardGroup;
