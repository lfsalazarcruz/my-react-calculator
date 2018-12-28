import React, { Component } from 'react';
import './WeatherApp.css';

import Form from './Form/Form';
import WeatherConditions from './WeatherConditions/WeatherConditions';

class WeatherApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			country: '',
			temperature: undefined,
			humidity: undefined,
			tempmin: undefined,
			tempmax: undefined,
			description: undefined,
			error: undefined,
		}
	}

	handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
	};

	getWeather = async (event) => {
		const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

		event.preventDefault();
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${API_KEY}`);
		const response = await api_call.json();
		console.log(response);
		if(this.state.city && this.state.country) {
			this.setState({
				city: response.name,
				country: response.sys.country,
				temperature: response.main.temp,
				humidity: response.main.humidity,
				description: response.weather[0].description,
				tempmin: response.main.temp_min,
				tempmax: response.main.temp_max,
				error: '',
			});
		} else if(this.state.city || this.state.country) {
			this.setState({
				error: 'Please enter a city and country...'
			});
		} else if(!this.state.city || !this.state.country) {
			this.setState({
				city: '',
				country: '',
				temperature: undefined,
				humidity: undefined,
				description: undefined,
				tempmin: undefined,
				tempmax: undefined,
				error: '',
			});
		} else {
			this.setState({
				city: '',
				country: '',
				temperature: undefined,
				humidity: undefined,
				description: undefined,
				tempmin: undefined,
				tempmax: undefined,
				error: 'City or Country not found. Try again...'
			});
		}
	}
	
	render() {
		return(
			<div className="weather-app">
				<h3 className="weather-app-title">My Weather App</h3>
				<Form 
					loadWeather={this.getWeather}
					city={this.state.city}
					country={this.state.country}
					handleChange={this.handleChange}/>
				<WeatherConditions
					city={this.state.city}
					country={this.state.country}
					temperature={this.state.temperature}
					humidity={this.state.humidity}
					tempmin={this.state.tempmin}
					tempmax={this.state.tempmax}
					description={this.state.description}
					error={this.state.error}
					/>
			</div>
		);
	}
}

export default WeatherApp;
