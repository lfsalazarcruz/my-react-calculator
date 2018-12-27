import React from 'react';
// import './WeatherApp.css';

const Form = props => {
	
		return (
			<form onSubmit={props.loadWeather}>
				<input 
					type="text" 
					name="city" 
					placeholder="City..." 
					onChange={props.handleChange} 
					value={props.city}/>
				<input
					type="text" 
					name="country" 
					placeholder="Country..." 
					onChange={props.handleChange} 
					value={props.country}/>
				<button type="submit">Get Weather</button>
			</form>
		);
	}


export default Form;