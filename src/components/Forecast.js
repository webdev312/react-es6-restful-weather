import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as utils from '../utils';
import Icon from './Icon';

class Forecast extends Component {
  renderForecastList() {
    const list = this.props.list;
    if (list) {
      return list.map(weather => (
        <li className='item' key={weather.time}>
          <div className="date-time">
            <div className="date">
              {utils.getShortDate(weather.time, this.props.timezone)}
            </div>
            <div className="time">
              {utils.getTime(weather.time, this.props.timezone)}
            </div>
          </div>
          <div className="icon">
            <Icon icon={weather.icon} />
          </div>
          <div className="temperature">
            {utils.kelvinToCelcius(weather.temperature)} °C
          </div>
          <div className="humidity">
            {weather.humidity}%
          </div>
        </li>
      ));
    }
    return <div></div>
  }

  render() {
    
    if (!this.props.loaded) {
      return <div></div>;
    }

    return (
      <div className="forecast card">
        <ul className="list">
          <li className="title">Forecast</li>
          {this.renderForecastList()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    ...state.forecast
  }
}

export default connect(mapStateToProps)(Forecast);

