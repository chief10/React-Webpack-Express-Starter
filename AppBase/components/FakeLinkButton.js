import React, {Component} from 'react';
import * as actions from '../lib/actions.js';
let dispatch;

class FakeLinkButton extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
     dispatch  = this.props.dispatch;
  }
  
  render() {
    return (
      <div className="NoDataBeingShown">
        <span>You have not selected any specifications yet.  Would you like to 
        <span className="fake-link" 
              onClick={this._showAllAvailableItems}> view all available options? </span>
          (There are {this.props.amount} available for this product)
        </span>
      </div>
    );
  }
  
  _showAllAvailableItems() {
    dispatch(actions.populateTableWithAllData());
  }
}

export default FakeLinkButton;