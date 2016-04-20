import React, { Component } from 'react';
import * as helpers from '../lib/helpers.js';
import TableRightDynamicHead from './TableRightDynamicHead.js';
import TableRightBody from './TableRightBody.js';

export default class TableRight extends Component {
  
  render() {
    const { dataRows, showingDataRows } = this.props;
    const bodyValues = helpers.properBodyValues(showingDataRows);
    const headValues = Object.keys(dataRows[0]);
    
    const formattedHeadValues = headValues.map((val) => {
      return helpers.camelCaseItems(val);
    }).filter((val) => {
      return val !== null;
    });
    
    if ( this.props.showingDataRows.length < 1) {
      return (
      <div className="SingleTableContainer">
        <table className="table ni-table-comparison">
          <TableRightDynamicHead headValues={formattedHeadValues}/>
        </table>
      </div>
      )
    } else {
        return (
          <div className="SingleTableContainer">
            <table className="table ni-table-comparison">
              <TableRightDynamicHead headValues={formattedHeadValues}/>
              <TableRightBody bodyValues={bodyValues} />
            </table>
          </div>
        )}
      }
}

