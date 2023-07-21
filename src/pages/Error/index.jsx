import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">
        Oups! La page que vous demandez n'a pas été trouvée.
      </p>
      <Link className="error__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
};

export default Error;
