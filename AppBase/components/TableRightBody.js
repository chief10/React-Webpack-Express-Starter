import React, {Component} from 'react';
import * as helpers from '../lib/helpers.js';
import DropdownContainer from './DropdownContainer.js';

class TableRightBody extends Component {
  render() {
    const { bodyValues } = this.props;
   
    return (
      <tbody>
        <tr>
          <td>
            <div>
              < DropdownContainer />
            </div>
          </td>
        </tr>
        {bodyValues.map((item, idx) => {
          return (
            <tr key={idx}>
              {helpers.provideValuesFromKeys(item)
                .map((localVal, key) => {
                  return (
                    <td key={key}>
                      <div>{localVal}</div>
                    </td>
                  )
                })
              }
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableRightBody;

