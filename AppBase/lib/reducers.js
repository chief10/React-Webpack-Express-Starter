// InitialState.dataRows items can have a number of differeing
// attributes based on the data that is passed to it. However, three items will
// always exist: an href for the "select" button, an image src and a price.


//First app reducer.
function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_HIGHLIGHT':
      return Object.assign({}, state, {
        dataRows: _handleMovingOfRowsForSelectBox(state.permDataRows, action.key)
      });

    case 'DESELECT_HIGHLIGHT':
      return Object.assign({}, state, {
        dataRows: [...state.permDataRows]
      });
      
    case 'POPULATE_DATAROWS_ALL':
    console.log(state, "Called properly")
      return Object.assign({}, state, {
        showingDataRows: [...state.permDataRows]
      });

    default:
      return state;
  }
}

export default appReducer;


//Might need to break this into multiple functions for different
//reducers
export function _handleMovingOfRowsForSelectBox(currentState, keyOfItem) {
  if (!currentState || !keyOfItem && keyOfItem !== 0) {
    throw new Error("This function requires both a state object and a item.");
  } else if (typeof keyOfItem !== "number") {
    throw new Error("keyOfItem must be a number");
  }
  let index = 0, atIndex = false;

  return currentState.map((item, idx) => {
    if (idx === keyOfItem || atIndex) {
      atIndex = true;
      item.selected = index++;
    }
    return item;
  });
}
