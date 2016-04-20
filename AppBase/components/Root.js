import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from '../lib/store';
import App from './App';


let item = document.getElementById('startingData');
let startingData = JSON.parse(item.innerHTML);


const initialState = {
  sortableAttrs: [],
  
  //This is the source of truth for this whole thing.
  
  //TODO figure out why starting state is getting mutated.
  permDataRows: startingData.slice(0),
  
  //This is the version that will change
  dataRows: [...startingData],
  
  
  //When the user wants to see a limited subset of Data, 
  //it goes through here.
  filters: [],
  
  
  sortOptions: [],
  
  showingDataRows: []
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

