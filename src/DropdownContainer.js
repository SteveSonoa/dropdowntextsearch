import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import OptionPanel from './OptionPanel';
import './DropdownContainer.css';

class DropdownWithText extends Component {
	constructor(props) {
		super(props);
		this.state = {
			optionsVisible: false,
			options: [],
			selectedOptions: [],
			checkedStatus: {}
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside, true);
		let checkedStatus = {};
		for (let i = 0; i < this.props.options.length; i++) {
			checkedStatus = {
				...checkedStatus,
				[this.props.options[i].value]: {
					checked: false,
					index: i,
					name: this.props.options[i].name
				}
			};
		}
		this.setState({
			options: this.props.options,
			checkedStatus
		});
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
	}

	handleClickOutside = event => {
		const domNode = ReactDOM.findDOMNode(this);

		if (!domNode || !domNode.contains(event.target)) {
			this.setState({
				optionsVisible: false
			});
		}
	};

	toggleOptionsVisible = () => {
		this.setState({
			optionsVisible: !this.state.optionsVisible
		});
	};

	toggleChecked = value => {
		const newSelectedOptions = [...this.state.selectedOptions];
		const oldSelectedOptions = [...this.state.selectedOptions];
		newSelectedOptions.push({ value: value, name: this.state.checkedStatus[value].name });

		this.setState({
			checkedStatus: {
				...this.state.checkedStatus,
				[value]: {
					checked: !this.state.checkedStatus[value].checked,
					index: this.state.checkedStatus[value].index
				}
			},
			selectedOptions: newSelectedOptions
		});
	};

	render() {
		let activeStyle, arrowStyle;
		if (this.state.optionsVisible) {
			activeStyle = { borderRadius: '4px 4px 0 0' };
			arrowStyle = { transform: 'rotate(-135deg)', WebkitTransform: 'rotate(-135deg)' };
		} else {
			activeStyle = { borderRadius: '4px' };
		}

		return (
			<div className="ddwtContainer">
				<button
					className="ddwtButton"
					onClick={this.toggleOptionsVisible}
					style={activeStyle}
				>
					{this.props.title} <i className="arrow" style={arrowStyle} />
				</button>
				{this.state.optionsVisible ? (
					<OptionPanel
						options={this.state.options}
						checkedStatus={this.state.checkedStatus}
						toggleAction={this.toggleChecked}
						selectedOptions={this.state.selectedOptions}
					/>
				) : null}
			</div>
		);
	}
}

DropdownWithText.propTypes = {
	title: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string
		})
	)
};

DropdownWithText.defaultProps = {
	title: 'Click to select',
	options: []
};

export default DropdownWithText;
