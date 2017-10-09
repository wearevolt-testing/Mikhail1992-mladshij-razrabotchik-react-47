export const initialState = {
  data: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'RECEIVE_PRODUCTS':
			return Object.assign({}, state, {
				data: action.payload
			});
		case 'ADD_NEW_PRODUCT':
			return {
				...state,
				data: _.concat([], state.data || [], action.payload || []),
			};
		case 'EDIT_NEW_PRODUCT':
			return {
				...state,
				data: state.data.map((product) => {
				  if (product.id === action.payload.id) {
					product = action.payload
				  }
				  return product;
				}),
			};

		case 'DELETE_NEW_PRODUCT':
			return {
				...state,
				data: state.data.filter((product) => product.id !== action.payload.id),
			};
		default:
      		return state;
	}
}