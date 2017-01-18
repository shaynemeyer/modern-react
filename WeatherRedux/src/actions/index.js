import axios from 'axios';

import appConfig from '../../app.conf';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${appConfig.openweatherAPI}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}