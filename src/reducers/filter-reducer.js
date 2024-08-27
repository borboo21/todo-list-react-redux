import { ACTION_TYPES } from './action-types';

export const filterState = {
	filter: '',
	sort: false,
};

export const filterReducer = (state = filterState, action) => {
	switch (action.type) {
		case ACTION_TYPES.FILTER: {
			return {
				...state,
				filter: action.payload,
			};
		}
		case ACTION_TYPES.SORT: {
			return {
				...state,
				sort: !state.sort,
			};
		}
		default:
			return state;
	}
};
