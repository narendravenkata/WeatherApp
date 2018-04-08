import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

import Chart from '../components/chart';



class WeatherList extends Component {
    renderWeather(cityData) {
        //console.log(cityData);
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="green"  units="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="orange" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%" />
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state) {
    return ({
        weather: state.weather
    })
}



export default connect(mapStateToProps)(WeatherList);