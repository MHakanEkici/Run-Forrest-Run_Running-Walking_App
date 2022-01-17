import axios from 'axios';
import Config from 'react-native-config';

export function fetchWeather(latitude, longitude) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Config.WEATHER_API_KEY}`,
  );
}
