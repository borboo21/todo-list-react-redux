import { ACTION_TYPES } from './action-types';

export const todoState = {
	todos: [],
	isLoading: false,
};

export const todoReducer = (state = todoState, action) => {
	switch (action.type) {
		case ACTION_TYPES.GET: {
			return {
				...state,
				todos: action.payload,
				isLoading: true,
			};
		}
		case ACTION_TYPES.TOGGLE_ISLOADING_FALSE: {
			return {
				...state,
				isLoading: false,
			};
		}
		case ACTION_TYPES.DELETE: {
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		}
		case ACTION_TYPES.POST: {
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		}
		case ACTION_TYPES.TODO_EDIT: {
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo,
				),
			};
		}
		case ACTION_TYPES.COMPLETED: {
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload
						? { ...todo, complete: !todo.complete }
						: todo,
				),
			};
		}
		default:
			return state;
	}
};
