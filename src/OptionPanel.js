import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OptionPanel.css';

class OptionPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: ''
		};
	}

	handleChange = e => {
		this.setState({
			filter: e.target.value
		});
	};

	handleSelectItem = e => {
		this.props.toggleAction(e.target.id);
	};

	filterOptions = () => {
		const newOptions = this.props.options.filter(option =>
			option.name.toLowerCase().includes(this.state.filter.toLowerCase())
		);
		return newOptions;
	};

	render() {
		let overflowIndicator;
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
					<li
						className={`${
							this.props.checkedStatus[option.value] &&
							this.props.checkedStatus[option.value].checked
								? 'opLi checked'
								: 'opLi'
						}`}
						id={option.value}
						onClick={this.handleSelectItem}
						key={option.value}
					>
						{/* <input
							type="checkbox"
							name="names"
							value={option.value}
							id={option.value}
							checked={this.props.checkedStatus[option.value].checked}
							onChange={this.handleSelectItem}
						/> */}
						{option.name}
					</li>
				))}
			</ul>
		);

		const listSelectedOptions = (
			<ul>
				{this.props.selectedOptions.map(option => (
					<li
						className={`${
							this.props.checkedStatus[option.value] &&
							this.props.checkedStatus[option.value].checked
								? 'opLi checked'
								: 'opLi'
						}`}
						id={option.value}
						onClick={this.handleSelectItem}
						key={option.value}
					>
						{/* <input
							type="checkbox"
							name="names"
							value={option.value}
							id={option.value}
							checked={this.props.checkedStatus[option.value].checked}
							onChange={this.handleSelectItem}
						/> */}
						{option.name}
					</li>
				))}
			</ul>
		);

		return (
			<div className="opContainer" style={overflowIndicator}>
				{listSelectedOptions}
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

OptionPanel.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string
		})
	),
	checkedStatus: PropTypes.object,
	toggleAction: PropTypes.func.isRequired
};

OptionPanel.defaultProps = {
	options: [],
	checkedStatus: {}
};

export default OptionPanel;
