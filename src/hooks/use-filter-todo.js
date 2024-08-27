import { useSelector } from 'react-redux';

export const useFilterTodo = (findTodo) => {
	const sort = useSelector((state) => state.filterReducer.sort);
	const displayedTasks = sort
		? [...findTodo].sort((a, b) => a.title.localeCompare(b.title))
		: findTodo;
	return {
		sort,
		displayedTasks,
	};
};
