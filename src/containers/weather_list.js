import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import GoogleMap from '../components/map';

class WeatherList extends Component {

  renderWeather(cityData) {

    const name=cityData.city.name;
    const temps = cityData.list.map(weather => kelvinToFahrenheit(weather.main.temp) );
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    //same as above:
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="orange" units="F"/>
        </td>
        <td><Chart data={pressure} color="green" units="hPA"/></td>
        <td><Chart data={humidity} color="blue" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
// { weather } same as const weather = state.weather
function mapStateToProps({weather}) {
  return { weather }; //same as {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
