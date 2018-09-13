import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './OptionPanel.css';

class OptionPanel extends Component {
	render() {
		let overflowIndicator;
		if (this.props.options.length > 6) {
			overflowIndicator = {
				maxHeight: '200px',
				overflow: 'scroll',
				overflowX: 'hidden'
			};
		}

		const listOptions = (
			<ul>
				{this.props.options.map(option => (
					<li className="opLi">{option.name}</li>
				))}
			</ul>
		);

		return (
			<div className="opContainer" style={overflowIndicator}>
				{listOptions}
			</div>
		);
	}
}

export default OptionPanel;
