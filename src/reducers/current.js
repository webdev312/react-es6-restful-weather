import { CURRENT_WEATHER_LOADED, CURRENT_WEATHER_ERROR } from '../actions/types';
const INITIAL_STATE = {
  weather: {
    main: '',
    description: '',
    icon: '',
    temperature: 0,
    feelsLike: 0,
    minTemperature: 0,
    maxTemperature: 0,
    pressure: 0,
    humidity: 0,
    clouds: 0,
    sunrise: 0,
    sunset: 0,
    windSpeed: 0,
    windDegree: 0,
    name: '',
    time: 0,
    timezone: 0
  },
  loaded: false,
  error: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CURRENT_WEATHER_LOADED:
      return {
        ...state,
        weather: {
          main: action.payload.weather[0].main || '',
          description: action.payload.weather[0].description || '',
          icon: action.payload.weather[0].icon || '',
          temperature: action.payload.main.temp,
          feelsLike: action.payload.main.feels_like,
          minTemperature: action.payload.main.temp_min,
          maxTemperature: action.payload.main.temp_max,
          pressure: action.payload.main.pressure,
          humidity: action.payload.main.humidity,
          clouds: action.payload.clouds.all || false,
          sunrise: action.payload.sys.sunrise,
          sunset: action.payload.sys.sunset,
          windSpeed: action.payload.wind.speed,
          windDegree: action.payload.wind.deg,
          name: action.payload.name,
          time: action.payload.dt,
          timezone: action.payload.timezone
        },
        loaded: true,
        error: false
      }
    default:
      return state;
  }
}