import React, {Component} from 'react';

class DropdownContainer extends Component {
  render() {
    return (
      <div className="DropdownContainer ni-dropdown">
        <div className="DropdownContainerHead ni-dropdown-head">
          <span>Select...</span>
          <span> ^</span>
        </div>
        <ul className="DropdownContainerList">
          <li>  <input type="checkbox" /> Somevalue </li>
          <li>  <input type="checkbox" /> Somevalue </li>
          <li>  <input type="checkbox" /> Somevalue </li>
          <li>  <input type="checkbox" /> Somevalue </li>
        </ul>
      </div>
    );
  }
}

export default DropdownContainer;