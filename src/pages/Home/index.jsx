import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/user/12">Karl</Link>
      <Link to="/user/18">Cécilia</Link>
    </div>
  );
};

export default Home;
