
//First app reducer.
function appReducer(state, action) {
	switch (action.type) {
		case 'SOMETHING': 
			return {
				//Change State here
			}
		default:
			return state;
	}
}

export default appReducer;
