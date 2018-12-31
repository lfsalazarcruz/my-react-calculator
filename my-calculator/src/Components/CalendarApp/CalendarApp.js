import React, { Component } from 'react';
import moment from 'moment';

import './CalendarApp.css';

class CalendarApp extends Component {
	state = {
		dateContext: moment(),
		today: moment(),
		showMonthPopup: false,
		showYearPopup: false,
	}

	weekdays = moment.weekdays(); // ["Sunday","Monday","Tuesday","Wednesday","Thursdar","Friday","Saturday"]
	weekdaysShort = moment.weekdaysShort(); // ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
	months = moment.months();

	year = () => {
		return this.state.dateContext.format("Y");
	}
	month = () => {
		return this.state.dateContext.format("MMMM");
	}
	daysInMonth = () => {
		return this.state.dateContext.daysInMonth();
	}
	currentDate = () => {
		return this.state.dateContext.get("date");
	}
	currentDay = () => {
		return this.state.dateContext.format("D");
	}

	firstsDayOfMonth = () => {
		let dateContext = this.state.dateContext;
		let firstDay = moment(dateContext).startOf('month').format('d');
		return firstDay;
	}

	// setMonth = (month) => {
	// 	let monthNo = this.months.indexOf(month);
	// 	let dateContext = Object.assign({}, this.state.dateContext);
	// 	dateContext = moment(dateContext).set("month", monthNo);
	// 	this.setState({
	// 		dateContext: dateContext
	// 	});
	// }

	// onSelectChange = (e, data) => {
	// 	this.setMonth(data);
	// 	this.props.onChangeMonth && this.props.onChangeMonth();
	// }

	// SelectList = (props) => {
	// 	let popup = props.data.map((data) => {
	// 		return (
	// 			<div key={data}>
	// 				<a href="#" onClick={(e) => {this.onSelectChange(e, data)}} className="months-tab">
	// 					{data}
	// 				</a>
	// 			</div>
	// 		);
	// 	});
	// 	return (
	// 		<div className="month-popup">
	// 			{popup}
	// 		</div>
	// 	);
	// }

	prevMonth = () => {
		let dateContext = Object.assign({}, this.state.dateContext);
		dateContext = moment(dateContext).subtract(1, "month");
		this.setState({
			dateContext: dateContext
		});
		this.props.onPrevMonth && this.props.onPrevMonth();
	}

	nextMonth = () => {
		let dateContext = Object.assign({}, this.state.dateContext);
		dateContext = moment(dateContext).add(1, "month");
		this.setState({
			dateContext: dateContext
		});
		this.props.onNextMonth && this.props.onNextMonth();
	}

	onChangeMonth = (e, month) => {
		this.setState({
			showMonthPopup: !this.state.showMonthPopup
		});
	}

	MonthNav = () => {
		return (
			<span 
			// onClick={(e) => {this.onChangeMonth(e,this.month())}} 
			className="label-month">
				{this.month()}
				{this.state.showMonthPopup &&
				<this.SelectList data={this.months} />
				}
			</span>
		);
	}

	showYearEditor = () => {
		this.setState({
			showYearNav: true
		});
	}

	setYear = (year) => {
		let dateContext = Object.assign({}, this.state.dateContext);
		dateContext = moment(dateContext).set("year", year);
		this.setState({
			dateContext: dateContext
		});
	}

	onYearChange = (e) => {
		this.setYear(e.target.value);
		this.props.onYearChange && this.props.onYearChange(e, e.target.value);
	}

	onKeyUpYear = (e) => {
		if (e.which === 13 || e.which === 27) {
			this.setYear(e.target.value);
			this.setState({
				showYearNav: false
			});
		}
	}

	YearNav = () => {
		return (
			this.state.showYearNav ? 
			<input 
				defaultValue = {this.year()}
				className = "editor-year"
				ref = {(yearInput) => {this.yearInput = yearInput}}
				onKeyUp = {(e) => this.onKeyUpYear(e)}
				onChange = {(e) => this.onYearChange(e)}
				type = "number"
				placeholder = "year" />
			:
			<span 
				className="label-year"
				onDoubleClick={(e) => {this.showYearEditor()}}>
				{this.year()}
			</span>
		);
	}

	render() {
		// Map the weekdays i.e. Sun, Mon, Tue, etc...
		let weekdays = this.weekdaysShort.map((day) => {
			return (
				<td key={day} className="week-day">{day}</td>
			)
		});

		let blanks = [];
		for (let i=0; i<this.firstsDayOfMonth(); i++) {
			blanks.push(<td key={i*80} className="emptySlot">
			{""}
			</td>
			);
		}

		console.log("Blanks: ", blanks);

		let daysInMonth = [];
		for (let d=1; d<=this.daysInMonth(); d++) {
			let className = (d === this.currentDate() ? "day current-day" : "day");
			daysInMonth.push(
				<td key={d} className={className}>
					<span>{d}</span>
				</td>
			);
		}

		console.log("Days: ", daysInMonth);

		var totalSlots = [...blanks, ...daysInMonth];
		let rows = [];
		let cells = [];

		totalSlots.forEach((row, i) => {
			if ((i % 7) !== 0) {
				cells.push(row);
			} else {
				let insertRow = cells.slice();
				rows.push(insertRow);
				cells = [];
				cells.push(row);
			}
			if (i === totalSlots.length-1) {
				let insertRow = cells.slice();
				rows.push(insertRow);
			}
		});

		let trElems = rows.map((d, i) => {
			return (
				<tr key={i*100}>
					{d}
				</tr>
			);
		})

		return (
			<div className="calendar-app">
				<table className="calendar">
					<thead>
						<tr>
							<td colSpan="5" className="calendar-header">
								<b><this.MonthNav />
								{" "}
								<this.YearNav /></b>
							</td>
							<td colSpan="2" className="nav-month">
								<i class="fas fa-angle-left" onClick={(e) => {this.prevMonth()}}></i>
								{"    "}
								<i class="fas fa-angle-right" onClick={(e) => {this.nextMonth()}}></i>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr className="weekdays">
							{weekdays}
						</tr>
						{trElems}
					</tbody>
				</table>
			</div>
		);
	}
}

export default CalendarApp;