import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from '../lib/store';
import App from './App';

import '../css/style.scss';
import '../css/tables.scss';
import '../css/TableContainer.scss';
let item = document.getElementById('startingData');
let startingData = JSON.parse(item.innerHTML);


const initialState = {
  sortableAttrs: [],
  
  //This is the source of truth for this whole thing.
  dataRows: [...startingData],
  
  //When the user wants to see a limited subset of Data, 
  //it goes through here.
  filteredData: []
};

const store = configureStore(initialState);


export default class Root extends Component {
	render() {
		return (
		<Provider store={store}>
			< App />	
		</Provider>
		)
	}
}

