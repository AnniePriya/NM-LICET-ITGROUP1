import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './Contact'; // Import the Contact component
import About from './About'; // Import the About component
import Works from './Works'; // Import the Works component
import React, { useState, useEffect } from 'react';

function App() {
  // Example ReactDOM.render() call in your app.js file
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('/api/about') // Fetch data from your Express backend
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

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
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Welcome to Clara McKensey's Portfolio</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    header {
      background-color: #D2B48C;
      padding: 20px;
      color: white;
      text-align: center;
    }
    footer {
      background-color: #D2B48C;
      color: white;
      text-align: center;
      padding: 20px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #D2B48C;
      padding: 10px;
    }
    nav h1 {
      font-weight: bold;
    }
    nav ul {
      list-style-type: none;
      display: flex;
    }
    nav ul li {
      margin: 0 10px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to Clara McKensey's Portfolio</h1>
  </header>
  <nav>
    <h1>McKensey</h1>
    <ul>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About Me</a></li>
      <li><a href="/works">Works</a></li>
    </ul>
  </nav>
  <div style="text-align: center; margin-top: 100px;">
    <!-- Your content for different routes will go here -->
    <!-- For instance: -->
    <!-- <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
    </Routes> -->
  </div>
  <footer>
    <p>Phone: +123627263247</p>
    <p>Email: claraworks@email</p>
  </footer>
</body>
</html>

    </Router>
  );
}

export default App;

