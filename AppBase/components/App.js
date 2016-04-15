import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TableContainer from './TableContainer.js';
import * as actions from '../lib/actions.js';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const { dispatch } = this.props;
  }
  
	render() {
		return (
			<div>
         <TableContainer dataRows={this.props.dataRows}/>
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
