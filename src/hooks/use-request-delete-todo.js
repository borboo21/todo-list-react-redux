import { ACTION_TYPES } from '../reducers/action-types';

export const requestDeleteTodo = (id) => {
	return async (dispatch) => {
		await fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		});
		dispatch({ type: ACTION_TYPES.DELETE, payload: id });
	};
};
