import React from 'react';
import './Form.css';

const Form = props => {
		return (
			<form onSubmit={props.loadWeather} className="form">
				<input 
					type="text" 
					name="city" 
					placeholder="City..." 
					onChange={props.handleChange} 
					value={props.city}
					className="form-input"/>
				<input
					type="text" 
					name="country" 
					placeholder="Country..." 
					onChange={props.handleChange} 
					value={props.country}
					className="form-input"/>
				<button type="submit">GO</button>
			</form>
		);
	}

export default Form;