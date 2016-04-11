import React, { Component } from 'react';
import TableLeft from './TableLeft.js';

export default class TableContainer extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="TableContainer">
        <div>
          TableLeft
          < TableLeft />
        </div>
        <div>
          TableRight
        </div>
      </div>
    )
  }
}
