import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.scss';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<Dashboard />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
