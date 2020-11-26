import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as utils from '../utils';
import Icon from './Icon';



class CurrentWeather extends Component {


  render() {
    console.log(this.props);
    let { weather } = this.props;
    const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    console.log(iconUrl);

    if (!this.props.loaded) {
      return <div></div>;
    }

    return (
      <div className="current-weather card">
        <div className="summary">
          <div className="icon">  
            <Icon icon={weather.icon} />    
          </div>
          <div className="temperature">
            {utils.kelvinToCelcius(weather.temperature)} °C
          </div>
          <div className="description">
            {utils.capitalizeWords(weather.description)}
          </div>
          
        </div>

        <div className="range">
          <div className="open">
            {utils.kelvinToCelcius(weather.maxTemperature)} °C
          </div>
          <div className="bar"></div>
          <div className="low">
          {utils.kelvinToCelcius(weather.minTemperature)} °C
          </div>
        </div>

        <div className="detail">
          <div className="wind">
            <span className="label">Wind: </span>
            {weather.windSpeed} 
            <span className="unit">m/s</span></div>
          <div className="pressure">
            <span className="label">Pressure: </span>
            {weather.pressure}
            <span className="unit">hPa</span></div>
          <div className="humidity">
            <span className="label">Humidity: </span>
            {weather.humidity}
            <span className="unit">%</span>
            </div>
          <div className="sunrise">
            <span className="label">Sunrise: </span>
            {utils.getTime(weather.sunrise, weather.timezone)}
          </div>
          <div className="sunset">
            <span className="label">Sunset: </span>
            {utils.getTime(weather.sunset, weather.timezone)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.weather
  }
}

export default connect(mapStateToProps, actions)(CurrentWeather);
