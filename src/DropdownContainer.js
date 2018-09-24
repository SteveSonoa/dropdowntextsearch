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
			prevSelectedOptions: []
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside, true);
		this.setState({
			options: [...this.props.options]
		});
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
	}

	componentWillUpdate(nextProps, nextState) {
		if (
			this.state.optionsVisible !== nextState.optionsVisible &&
			!nextState.optionsVisible &&
			this.state.prevSelectedOptions !== nextState.selectedOptions &&
			(this.state.prevSelectedOptions.length > 0 || nextState.selectedOptions.length > 0)
		) {
			this.setState({
				prevSelectedOptions: this.state.selectedOptions
			});
			this.completeFilteredCall();
		}
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

	selectOption = value => {
		// find the object inside the this.state.options array
		const clickedObject = this.state.options.filter(option => option.value === value)[0];
		// remove that option from the this.state.options array
		const newStateOptions = this.state.options.filter(option => option.value !== value);
		// add that option to the this.state.selectedOptions array
		this.setState({
			...this.state,
			selectedOptions: [...this.state.selectedOptions, clickedObject],
			options: newStateOptions
		});
	};

	unselectOption = value => {
		// remove that option from the this.state.selectedOptions array
		const newStateSelectedOptions = this.state.selectedOptions.filter(
			option => option.value !== value
		);
		// add that option to its original index inside the this.state.options array
		let newStateOptions = [...this.props.options];
		for (let i = 0; i < newStateSelectedOptions.length; i++) {
			newStateOptions = newStateOptions.filter(
				option => option.value !== newStateSelectedOptions[i].value
			);
		}

		this.setState({
			...this.state,
			selectedOptions: newStateSelectedOptions,
			options: newStateOptions
		});
	};

	completeFilteredCall = () => {
		this.props.action(this.state.selectedOptions);
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
						selectedOptions={this.state.selectedOptions}
						actionSelect={this.selectOption}
						actionUnselect={this.unselectOption}
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
	),
	action: PropTypes.func
};

DropdownWithText.defaultProps = {
	title: 'Click to select',
	options: [],
	action: () => {}
};

export default DropdownWithText;
