import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Types from './components/Types'
import Major from './components/Major';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/types" exact element={<Types />} />
        <Route path="/major" exact element={<Major />} />
      </Routes>
      

    </Router>

    
  );
}

export default App;
