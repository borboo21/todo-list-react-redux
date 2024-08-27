import { ACTION_TYPES } from '../reducers';

export const requestEditTodo = (id, editInput) => {
	return (dispatch) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: editInput,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				dispatch({ type: ACTION_TYPES.TODO_EDIT, payload: response });
			});
	};
};
