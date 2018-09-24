# DropdownContainer Component

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## How To Install

-   Clone this repo to your local directory
-   Type "cd dropdowntextsearch" to enter the repo
-   Type "npm install" to install the repo and its dependencies
-   Type "npm run start" to begin the demo

## Component Details

As displayed in /App.js, the DropdownContainer component accepts 3 props. The PropTypes diagram is below:

```jsx
{
	title: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string
		})
	),
	action: PropTypes.func
}
```

The 'action' callback will pass an array of objects in the same format as 'options' as parameters. In the event no options were selected, an empty array will be passed through.

## Author

-   Steve Marshall <mailto:smarshall@axway.com>
