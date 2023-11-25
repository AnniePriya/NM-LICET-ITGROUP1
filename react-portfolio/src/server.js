const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

// Serve static files from the build folder of your React app
app.use(express.static(path.join(__dirname, 'public')));

// Define your API routes
app.get('/api/about', (req, res) => {
  const aboutData = {
    name: 'Clara McKensey',
    age: 26,
    occupation: 'Interior Designer',
    university: 'Cornell University',
    awards: ['ASID National Awards 2016', 'Designer of Distinction Award 2017', 'Design Innovation 2020'],
    // Add more information as needed
  };
  res.json(aboutData);
});

// Send the React app as the default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
