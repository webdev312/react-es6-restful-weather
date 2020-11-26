import axios from 'axios';
import { CURRENT_WEATHER_LOADED, CURRENT_WEATHER_ERROR, FORECAST_WEATHER_LOADED, FORECAST_WEATHER_ERROR } from './types';
import config from '../config';



const CURRENT_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const FORECAST_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/forecast';

export const fetchCurrentWeather = (city) => async dispatch => {
  try {
    const url = `${CURRENT_WEATHER_API_URL}?q=${city}&appid=${config.API_KEY}`;
    const response = await axios.get(url);
    dispatch({ type: CURRENT_WEATHER_LOADED, payload: response.data });
  } catch (e) {
    dispatch({ type: CURRENT_WEATHER_ERROR });
  }
} 


export const fetchForecastWeather = (city) => async dispatch => {
  try {
    const url = `${FORECAST_WEATHER_API_URL}?q=${city}&appid=${config.API_KEY}`;
    const response = await axios.get(url);
    dispatch({ type: FORECAST_WEATHER_LOADED, payload: response.data });
  } catch (e) {
    dispatch({ type: FORECAST_WEATHER_ERROR });
  }
}
