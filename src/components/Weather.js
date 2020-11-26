import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import * as actions from "../actions";
import * as utils from "../utils";

class Weather extends Component {
  state = {
    city: "",
  };

  onChangeInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  onClickSearch = (e) => {
    e.preventDefault();
    this.props.fetchCurrentWeather(this.state.city);
    this.props.fetchForecastWeather(this.state.city);
    this.setState({ city: "" });
  };

  componentDidMount() {
    this.props.fetchCurrentWeather("London");
    this.props.fetchForecastWeather("London");
  }

  render() {
    return (
      <div className="content">
        <div className="location card">
          <form>
            <div className="search">
              <input
                type="text"
                onChange={this.onChangeInput}
                value={this.state.city}
              ></input>
              <button onClick={this.onClickSearch}>Search</button>
            </div>
          </form>

          <h2 className="city">{this.props.weather.name}</h2>
          <div className="time">
            {utils.getDateTime(
              this.props.weather.time,
              this.props.weather.timezone
            )}
          </div>
        </div>
        <div className="weather">
          <CurrentWeather />
          <Forecast />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.weather,
  };
}

export default connect(mapStateToProps, actions)(Weather);
