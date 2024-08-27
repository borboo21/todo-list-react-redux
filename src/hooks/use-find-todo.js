import { useSelector } from 'react-redux';

export const useFindTodo = (todos) => {
	const filter = useSelector((state) => state.filterReducer.filter);
	const findTodo = filter
		? todos.filter((todoValue) => {
				return todoValue.title.toLowerCase().includes(filter.toLowerCase());
			})
		: todos;
	return {
		findTodo,
	};
};
