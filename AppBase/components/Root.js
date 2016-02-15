import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from '../lib/store';
import App from './App';

import '../../public/css/style.scss';
const store = configureStore();


export default class Root extends Component {
	render() {
		return (
		<Provider store={store}>
			< App />	
		</Provider>
		)
	}
}

