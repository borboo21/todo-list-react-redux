import { ACTION_TYPES } from '../reducers/action-types';

export const requestAddTodo = (todo) => {
	return (dispatch) => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(todo),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				dispatch({ type: ACTION_TYPES.POST, payload: response });
				console.log('Todo add:', response);
			})
			.finally(() => {});
	};
};
