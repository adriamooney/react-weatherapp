import axios from 'axios';

const API_KEY = '42b5830dee493cf3f6367d3c026af7e6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//create an action creator

//this is an action creator:
export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  //returns a promise.  we pass that to the action's payload
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
