import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './OptionPanel.css';

class OptionPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: '',
			checkedStatus: {}
		};
	}

	componentDidMount() {
		let checkedStatus = {};
		for (let i = 0; i < this.props.options.length; i++) {
			checkedStatus = {
				...checkedStatus,
				[this.props.options[i].value]: false
			};
		}
		this.setState({
			checkedStatus
		});
	}

	handleChange = e => {
		this.setState({
			filter: e.target.value
		});
	};

	handleSelectItem = e => {
		console.log(e.target.id);
		this.setState({
			checkedStatus: {
				...this.state.checkedStatus,
				[e.target.id]: !this.state.checkedStatus[e.target.id]
			}
		});
	};

	filterOptions = () => {
		const newOptions = this.props.options.filter(option =>
			option.name.toLowerCase().includes(this.state.filter.toLowerCase())
		);
		return newOptions;
	};

	render() {
		let overflowIndicator, inputStyle;
		if (this.filterOptions().length > 6) {
			overflowIndicator = {
				maxHeight: '200px',
				overflow: 'scroll',
				overflowX: 'hidden'
			};
		}

		const listOptions = (
			<ul>
				{this.filterOptions().map(option => (
					<li className="opLi" id={option.value} onClick={this.handleSelectItem}>
						<input
							type="checkbox"
							name="names"
							value={option.value}
							checked={this.state.checkedStatus[option.value]}
						/>
						{option.name}
					</li>
				))}
			</ul>
		);

		return (
			<div className="opContainer" style={overflowIndicator}>
				<input
					type="text"
					value={this.state.filter}
					onChange={this.handleChange}
					className="opInput"
				/>
				{listOptions}
			</div>
		);
	}
}

export default OptionPanel;
