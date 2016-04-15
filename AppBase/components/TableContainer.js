import React, { Component } from 'react';
import TableLeft from './TableLeft.js';
import TableRight from './TableRight.js';


export default class TableContainer extends Component {
  constructor(props) {
    super(props);
    //Methods that need to be bound to "this";
  }
  
  componentDidMount() {}
  
  render() {
    return (
        <div className="TableContainer">
          <div className="TableToggles"></div>
          <div className="TableTable">
            <div className="TableContainerLeft">
              <TableLeft dataRows={this.props.dataRows}/>
            </div>
            <div className="TableContainerRight">
              <TableRight dataRows={this.props.dataRows}/>
            </div>
          </div>
        </div>
    );
  }
};



