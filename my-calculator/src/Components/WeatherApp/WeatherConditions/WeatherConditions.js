import React from 'react';
import './WeatherConditions.css';

const WeatherConditions = props => {
	return(
		<div className="weather-conditions">
			<div className="weather-top">
				{props.country && props.city && <p>{props.city}, {props.country}</p>}
				{props.description && <p>{props.description}</p>}
			</div>
			<div className="weather-temp">
				{props.temperature && <p>{props.temperature}°C</p>}
			</div>
			<div className="weather-bottom">
				{props.humidity && <p>humidity: {props.humidity}%</p>}
				{props.tempmin && props.tempmax &&  <p>min/max: {props.tempmin}°C / {props.tempmax}°C</p>}
			</div>
			{props.error && <p>{props.error}</p>}
		</div>
	)
}

export default WeatherConditions;