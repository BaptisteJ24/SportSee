import { Link } from 'react-router-dom';
import karlPicture from '/assets/karl.jpg';
import ceciliaPicture from '/assets/cecilia.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>SportSee</h1>
      <h2>Choisissez un utilisateur pour voir son profil</h2>
      <div className="home__profiles">
        <div className="home__profile">
          <Link to="/user/12">
            <div className="home__profile__picture">
              <img src={karlPicture} alt="Karl profile picture" />
            </div>
            Karl
          </Link>
        </div>
        <div className="home__profile">
          <Link to="/user/18">
            <div className="home__profile__picture">
              <img src={ceciliaPicture} alt="Cecilia profile picture" />
            </div>
            Cécilia
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
