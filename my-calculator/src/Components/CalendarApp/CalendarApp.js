import React, { Component } from 'react';
import moment from 'moment';

import './CalendarApp.css';

class CalendarApp extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	state = {
		momentContext: moment(),
		today: moment(),
		showMonthPopup: false,
		showYearPopup: false,
	}

	render() {
		return (
			<div className="calendar-app">Calendar</div>
		);
	}
}

export default CalendarApp;