import React, { Component } from 'react';
import './WeatherApp.css';

import Form from './Form/Form';
import WeatherConditions from './WeatherConditions/WeatherConditions';

class WeatherApp extends Component {
	render() {
		return(
			<div>
				<div>This is weather app</div>
				<Form/>
				<WeatherConditions/>
			</div>
		);
	}
}

export default WeatherApp;
