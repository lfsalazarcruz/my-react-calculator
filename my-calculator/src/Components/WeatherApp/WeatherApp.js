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
		}
	}

	handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
	};

	getWeather = async (event) => {
		event.preventDefault();
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=9b6146ed56aeecdad2247aa0eea8aded`);
		const response = await api_call.json();
		console.log(response);
		this.setState({
			city: '',
			country:'',
		})
	}
	
	render() {
		return(
			<div>
				<Form 
					loadWeather={this.getWeather}
					city={this.state.city}
					country={this.state.country}
					handleChange={this.handleChange}/>
				<WeatherConditions/>
			</div>
		);
	}
}

export default WeatherApp;
