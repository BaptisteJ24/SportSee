import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Error = ({ needMock, mockStateFunction }) => {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">
        Oups! La page que vous demandez n&apos;a pas été trouvée.
      </p>
      {needMock && (
        <button className="error__mock-button" onClick={mockStateFunction}>
          Utiliser les données mockées ?
        </button>
      )}
      <Link className="error__link" to="/">
        Retourner sur la page d&apos;accueil
      </Link>
    </section>
  );
};

Error.propTypes = {
  needMock: PropTypes.bool,
  mockStateFunction: PropTypes.func,
};

Error.defaultProps = {
  needMock: false,
  mockStateFunction: () => {},
};

export default Error;
