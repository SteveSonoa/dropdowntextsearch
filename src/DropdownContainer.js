import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OptionPanel from './OptionPanel';
import './DropdownContainer.css';

class DropdownWithText extends Component {
	constructor(props) {
		super(props);
		this.state = {
			optionsVisible: false
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
		let activeStyle;
		if (this.state.optionsVisible) {
			activeStyle = { borderRadius: '4px 4px 0 0' };
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
					{this.props.title} <i className="arrow" />
				</button>
				{this.state.optionsVisible ? (
					<OptionPanel
						options={[
							{ name: 'Hello', value: 'hello' },
							{ name: 'World', value: 'world' },
							{ name: 'Hello', value: 'hello' },
							{ name: 'World', value: 'world' },
							{ name: 'World', value: 'world' },
							{ name: 'Hello', value: 'hello' },
							{ name: 'World', value: 'world' },
							{ name: 'Hello', value: 'hello' },
							{ name: 'World', value: 'world' }
						]}
					/>
				) : null}
			</div>
		);
	}
}

export default DropdownWithText;
