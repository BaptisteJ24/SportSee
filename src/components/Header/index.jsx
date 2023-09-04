import { NavLink } from 'react-router-dom';
import logo from '/assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink className="header__link">Profil</NavLink>
        <NavLink className="header__link">Réglages</NavLink>
        <NavLink className="header__link">Communauté</NavLink>
      </nav>
    </header>
  );
};

export default Header;
