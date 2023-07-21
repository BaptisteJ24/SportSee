import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <Link to="/user/12">Karl</Link>
      <Link to="/user/18">Cécilia</Link>
    </React.Fragment>
  );
};

export default Home;
