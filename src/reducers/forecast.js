import { FORECAST_WEATHER_LOADED, FORECAST_WEATHER_ERROR } from '../actions/types';
const INITIAL_STATE = {
  list: [

  ],
  city: '',
  timezone: 0,
  loaded: false,
  error: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FORECAST_WEATHER_LOADED:
      let forecastList = [];

      if (action.payload.list) {
        for (let i = 0; i < action.payload.list.length; i++) {
          forecastList.push({
            time: action.payload.list[i].dt,
            temperature: action.payload.list[i].main.temp,
            minTemperature: action.payload.list[i].main.temp_min,
            maxTemperature: action.payload.list[i].main.temp_max,
            pressure: action.payload.list[i].main.pressure,
            humidity: action.payload.list[i].main.humidity,
            main: action.payload.list[i].weather[0].main,
            description: action.payload.list[i].weather[0].description,
            icon: action.payload.list[i].weather[0].icon,
            windSpeed: action.payload.list[i].wind.speed,
            windDegree: action.payload.list[i].wind.deg,
          });
        }
      }

      return {
        ...state,
        list: forecastList,
        city: action.payload.city.name,
        timezone: action.payload.city.timezone,
        loaded: true,
        error: false
      };
      
    default:
      return state;
  }
}