// server.js
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API route to fetch weather data
app.get('/weather/:city', async (req, res) => {
  const { city } = req.params;

  try {
    const apiKey = 'b6dadf469ae80f97e913fc197e9805c8'; // Replace with your OpenWeatherMap API key
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const temperature = response.data.main.temp;
    const humidity = response.data.main.humidity;
    const pressure = response.data.main.pressure;
    res.json({ temperature, humidity, pressure });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
