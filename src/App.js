import React, { Component } from 'react';
import './App.css';
import DropdownWithText from './DropdownContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<DropdownWithText title="Menu Item" />
			</div>
		);
	}
}

export default App;
