//import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root.js';


if( window ) {
	window.onload = function() {
		render(
			<Root />,
			document.getElementById('root')
		)
	}
} else {
	render(
		<Root />,
		document.getElementById('root')
	)
}
