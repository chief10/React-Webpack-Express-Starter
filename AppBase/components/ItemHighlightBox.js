import React, {Component} from 'react';

class ItemHighlightBox extends Component {
  componentWillMount(){}
  render() {
    const { info, dispatch } = this.props;
    
   let itemIsSelected = info.selected === 0 ? 
        "itemIsShowing" : 
        "";
    
    let allItemClasses = `ItemHighlightBox ${itemIsSelected}`;
    return (
      <div className={allItemClasses} >
        <div className="ItemHighlightBox_image"></div>
        <div className="ItemHighlightBox_details">asdf</div>
        <div className="ItemHighlightBox_price"></div>
      </div>
    );
  }
}

export default ItemHighlightBox;