import _ from 'lodash';

export const initialState = {
	data: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'RECEIVE_CUSTOMERS':
			return {
				...state,
				data: action.payload.data
			};
		case 'ADD_NEW_CUSTOMER':
			return {
				...state,
				data: _.concat([], state.data || [], action.payload || []),
			};
		case 'EDIT_NEW_CUSTOMER':
			return {
				...state,
				data: state.data.map((customer) => {
				  if (customer.id === action.payload.id) {
					customer = action.payload
				  }
				  return customer;
				}),
			};

		case 'DELETE_NEW_CUSTOMER':
			return {
				...state,
				data: state.data.filter((customer) => customer.id !== action.payload.id),
			};
		default:
      		return state;
	}
}