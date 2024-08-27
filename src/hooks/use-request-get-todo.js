import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../reducers/action-types';

export const fetchTodos = () => {
	return (dispatch) => {
		fetch('http://localhost:3005/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				dispatch({ type: ACTION_TYPES.GET, payload: loadedTodos });
			})
			.finally(() => dispatch({ type: ACTION_TYPES.TOGGLE_ISLOADING_FALSE }));
	};
};

export const useRequestGetTodo = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);
};
