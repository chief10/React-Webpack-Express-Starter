import React, {Component} from 'react';

//Moved static head here to make the "TableLeft" Component
//a little less cray cray.
class TableLeftStaticHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>
            <div>
              <span></span>
            </div>
          </th>
          <th>
            <div>
              <span>Price</span>
            </div>
          </th>
        </tr>
      </thead>
    );
  }
}

export default TableLeftStaticHead;