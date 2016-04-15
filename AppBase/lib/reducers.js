// InitialState.dataRows items can have a number of differeing
// attributes based on the data that is passed to it. However, three items will
// always exist: an href for the "select" button, an image src and a price.


//First app reducer.
function appReducer(state = initialState, action) {
	switch (action.type) {
		case 'POPULATE_DATAROWS': 
			return Object.assign({}, state, {
        dataRows: [
          ...action.dataRows 
        ]
      })
		default:
			return state;
	}
}

export default appReducer;



