import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './Contact'; // Import the Contact component
import About from './About'; // Import the About component
import Works from './Works'; // Import the Works component

function App() {
  const navStyle = {
    backgroundColor: '#D2B48C', // Light brown background color for navigation bar
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const footerStyle = {
    backgroundColor: '#D2B48C', // Light brown background color for footer
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <Router>
      <div>
        <div style={navStyle}>
          <h1 style={{ fontWeight: 'bold' }}>Clara McKensey</h1>
          <ul style={{ listStyleType: 'none', display: 'flex' }}>
            <li style={{ margin: '0 10px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Me</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/works" style={{ color: 'white', textDecoration: 'none' }}>Works</Link></li>
          </ul>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Routes>
            <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
            <Route path="/about" element={<About />} /> {/* Route for About page */}
            <Route path="/works" element={<Works />} /> {/* Route for Works page */}
          </Routes>
        </div>
        <footer style={footerStyle}>
          <p>Phone: +123627263247</p>
          <p>Email: claraworks@email</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

