import React, {Component} from 'react';

class TableRightDynamicHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.headValues.map((val, idx) => {
            return (
              <th key={idx}>
                <div>
                  <span>{val}</span>
                  <i className="fa fa-info-circle"></i>
                </div>
              </th>
            )
          }) }
        </tr>
      </thead>
    );
  }
}

export default TableRightDynamicHead;