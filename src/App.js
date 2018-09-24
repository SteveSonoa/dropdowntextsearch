import React, { Component } from 'react';
import './App.css';
import DropdownWithText from './DropdownContainer';

class App extends Component {
	myAction = selections => {
		alert('Completing action with the selections found in your console!');
		console.log(selections);
	};

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
			{ name: 'Remi', value: 'remi' },
			{ name: 'Georgiana', value: 'georgiana' },
			{ name: 'Rumeli', value: 'rumeli' },
			{ name: 'This is a really long name', value: 'test' },
			{ name: 'Mom', value: 'mom' },
			{ name: 'Dad', value: 'dad' },
			{ name: 'Sister', value: 'sister' },
			{ name: 'Brother', value: 'brother' },
			{ name: 'Aunt', value: 'aunt' },
			{ name: 'Uncle', value: 'uncle' }
		];
		return (
			<div className="App">
				<DropdownWithText title="Menu Item" options={options} action={this.myAction} />
			</div>
		);
	}
}

export default App;
