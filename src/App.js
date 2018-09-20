import React, { Component } from 'react';
import './App.css';
import DropdownWithText from './DropdownContainer';

class App extends Component {
	render() {
		const options = [
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
		];
		return (
			<div className="App">
				<DropdownWithText title="Menu Item" options={options} />
			</div>
		);
	}
}

export default App;
