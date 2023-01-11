import React from 'react';
import './App.css';
import HomePage from './Components/Home/HomePage';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router,Routes,Route ,Navigate } from 'react-router-dom'
import Cleaning from './Components/Cleaning/Cleaning';
import Office from './Components/Office/Office';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    
    <Router>

    <NavBar/>
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/cleaning" element={<Cleaning />} />
      <Route  path="/office" element={<Office />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer/>
    </Router>



      
    </div>
  );
}

export default App;
