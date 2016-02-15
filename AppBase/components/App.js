import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AdLeashNavbar from './AdLeashNavbar/AdLeashNavbar.component.js';

class App extends Component {
	render() {
		return (
			<div>
				<h1>I am the top level of the app.</h1>
				<h2>Hello, World!</h2>
				<AdLeashNavbar/>
			</div>
		)
	}
}

//This function can be changed to return only 
//the pieces of state that this component cares about.
//For right now, leaving this to grab the global
//state.
function provideState(state = {}) {
	return state;
}

export default connect(provideState)(App);
