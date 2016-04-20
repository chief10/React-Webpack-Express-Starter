import React, { Component } from 'react';
import TableLeft from './TableLeft.js';
import TableRight from './TableRight.js';
import FakeLinkButton from './FakeLinkButton.js';
import * as actions from '../lib/actions.js';

export default class TableContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, dataRows, showingDataRows, filters } = this.props;
    if ( showingDataRows.length < 1 && !filters.length > 0 ) {
      
      return (
          <div className="TableContainer">
            <div className="TableToggles"></div>
            <div className="TableTable">
              <div className="TableContainerLeft">
                <TableLeft {...this.props} />
              </div>
              <div className="TableContainerRight">
                <TableRight {...this.props} />
              </div>
            </div>
            <FakeLinkButton 
              dispatch={this.props.dispatch} 
              amount={this.props.dataRows.length} />
          </div>
      );
    } else {
         return (
          <div className="TableContainer">
            <div className="TableToggles"></div>
            <div className="TableTable">
              <div className="TableContainerLeft">
                <TableLeft {...this.props} />
              </div>
              <div className="TableContainerRight">
                <TableRight {...this.props} />
              </div>
            </div>
          </div>
      );
    }
  }
  
  _fullDataRowPopulate() {
    
  }
};



