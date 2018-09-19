import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OptionPanel from './OptionPanel';
import './DropdownContainer.css';

class DropdownWithText extends Component {
	constructor(props) {
		super(props);
		this.state = {
			optionsVisible: false,
			options: [
				{ name: 'Hello', value: 'hello' },
				{ name: 'World', value: 'world' },
				{ name: 'Victor', value: 'victor' },
				{ name: 'Alexey', value: 'alexey' },
				{ name: 'Sagar', value: 'sagar' },
				{ name: 'JD', value: 'jd' },
				{ name: 'Ravi', value: 'ravi' },
				{ name: 'Steve', value: 'steve' },
				{ name: 'Mom', value: 'mom' },
				{ name: 'Dad', value: 'dad' },
				{ name: 'Sister', value: 'sister' },
				{ name: 'Brother', value: 'brother' },
				{ name: 'Aunt', value: 'aunt' },
				{ name: 'Uncle', value: 'uncle' }
			]
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside, true);
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

	render() {
		let activeStyle, arrowStyle;
		if (this.state.optionsVisible) {
			activeStyle = { borderRadius: '4px 4px 0 0' };
			arrowStyle = { transform: 'rotate(-135deg)', webkitTransform: 'rotate(-135deg)' };
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
				{this.state.optionsVisible ? <OptionPanel options={this.state.options} /> : null}
			</div>
		);
	}
}

export default DropdownWithText;
