import React, { Component } from 'react';

export default class TableLeft extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <a href="/en-us/shop.html" className="ni-uppercase ni-btn ni-btn-commerce">
                  <span>
                    Select
                  </span>
                </a>
              </div>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    )
  }
}