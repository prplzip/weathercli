const { text, intro, outro } = require('@clack/prompts');
const axios = require('axios');
const dotenv = require('dotenv').config();

intro('🌦️ Weather CLI v1.0');

async function getWeather() {
  const city = await text({
    message: 'City:',
    placeholder: 'e.g., => "Los Angeles" | "Paris"'
  });

  const location = await text({
      message: 'Location:', 
      placeholder: 'You can use short or long form => e.g., "California" | "CA", "France" | "FR"'
  });

  const apiKey = process.env.apiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${location},US&appid=${apiKey}&units=imperial&exclude=minutely,hourly,alerts`;

  try {
    const response = await axios.get(url);
    console.log(`Here's the most recent weather data for ${city}, ${location}:`); 
    console.log(`- Temperature: ${response.data.main.temp}°F`);
    console.log(`- Feels like: ${response.data.main.feels_like}°F`);
    console.log(`- Description: ${response.data.weather[0].description}`); 
    console.log(`- Humidity: ${response.data.main.humidity}%`);
    console.log(`- Wind Speed: ${response.data.wind.speed} mph`);
  } catch (error) {
    console.error("😖 You may have entered something invalid:", error.message,);
  }

  outro('👋 Thank you for using Weather CLI!');
}

getWeather();
