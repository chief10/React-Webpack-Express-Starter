import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div>
				<h1>I am the top level of the app.</h1>
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
