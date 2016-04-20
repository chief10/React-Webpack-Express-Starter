import React, { Component } from 'react';
import TableLeftStaticHead from './TableLeftStaticHead.js';
import ItemHighlightBox from './ItemHighlightBox.js';
import * as actions from '../lib/actions.js';

let dispatch = null;

export default class TableLeft extends Component {
  constructor(props) {
    super(props);
    this.selectThisElement = this.selectThisElement.bind(this);
  }
  
  componentDidMount() {
    dispatch = this.props.dispatch;
  }
  
  render() {
    if ( this.props.showingDataRows.length < 1 ) {
      return (
        <div className="SingleTableContainer">
          <table className="table ni-table-comparison">
            <TableLeftStaticHead />
          </table>
        </div>
      )
    } else {
    return (
      <div className="SingleTableContainer">
        <table className="table ni-table-comparison">
          <TableLeftStaticHead />
          <tbody>
          <tr>
            <td>
              <div></div>
            </td>
            <td> <div></div></td>
          </tr>
            {this.props.showingDataRows.map((item, key) => {
              return (
                <tr key={key}>
                    <td>
                      <div className="TableLeftSelectContainer">
                        <a className="ni-uppercase ni-btn ni-btn-commerce"
                          onClick={this.selectThisElement.bind(null, key)}>
                        <span> Select </span>
                        </a>
                        <ItemHighlightBox info={item} 
                                          dispatch={this.props.dispatch}/>
                      </div>
                    </td>
                    <td>
                      <div>${item.Price}</div>
                    </td>
                  </tr> 
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }}
  
  selectThisElement(key, e) {
    dispatch(actions.selectItemToHighlight(key));

  }
  
  deselectItemToHighlight() {
    dispatch(actions.deselectItemToHighlight());
  }
}


