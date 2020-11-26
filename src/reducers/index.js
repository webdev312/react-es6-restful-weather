import { combineReducers } from 'redux';
import weatherReducer from './current';
import forecastReducer from './forecast';

export default combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer
});