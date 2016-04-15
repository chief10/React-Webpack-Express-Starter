import React, { Component } from 'react';
import TableLeftStaticHead from './TableLeftStaticHead.js';


export default class TableLeft extends Component {
  render() {
    return (
      <table className="table ni-table-comparison">
        <TableLeftStaticHead />
        <tbody>
          {this.props.dataRows.map((item, key) => {
            return (
               <tr key={key}>
                  <td>
                    <div>
                      <a href="/en-us/shop.html" className="ni-uppercase ni-btn ni-btn-commerce">
                      <span>
                        Select
                      </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div>${item.Price}</div>
                  </td>
                </tr> 
            )
          })}
        </tbody>
      </table>
    )
  }
}


