import icon from '/assets/SportSee_logo.svg';

const Loader = () => {
  return (
    <div className="loader">
      <span className="loader__spinner"></span>
      <img className="loader__icon" src={icon} alt="SportSee icon" />
      <p className="loader__text">Chargement</p>
    </div>
  );
};

export default Loader;
