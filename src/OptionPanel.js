import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
					<li className="opLi">{option.name}</li>
				))}
			</ul>
		);

		return (
			<div className="opContainer" style={overflowIndicator}>
				<input
					type="text"
					style={{ width: '90%', margin: '0 auto', marginBottom: '5px' }}
					value={this.state.filter}
					onChange={this.handleChange}
				/>
				{listOptions}
			</div>
		);
	}
}

export default OptionPanel;
