import PropTypes from 'prop-types';

const NutrimentCard = ({ nutriment, value, unit, icon }) => {
  return (
    <div className="nutriment-card">
      <div className="nutriment-card__icon">
        <img src={icon} alt={`${nutriment} icon`} />
      </div>
      <div className="nutriment-card__content">
        <p className="nutriment-card__content__value">
          {value}
          {unit}
        </p>
        <p className="nutriment-card__content__title">{nutriment}</p>
      </div>
    </div>
  );
};

NutrimentCard.propTypes = {
  nutriment: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NutrimentCard;
