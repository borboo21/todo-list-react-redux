import './index.css';
import styles from './App.module.css';
import { useSelector } from 'react-redux';
import { FindBlock } from './components/find-block';
import { TodoPusher } from './components/todo-pusher';
import { TodoList } from './components/todo-list';
import { todosSelector } from './selectors/todo-selector';
import { useRequestGetTodo, useFilterTodo, useFindTodo } from './hooks';

export const App = () => {
	const todos = useSelector(todosSelector);

	useRequestGetTodo();
	const { findTodo } = useFindTodo(todos);
	const { displayedTasks } = useFilterTodo(findTodo);

	return (
		<div className={styles.app}>
			<div className={styles.title}>Список дел</div>
			<FindBlock />
			<div className={styles.main}>
				<TodoList displayedTasks={displayedTasks} />
			</div>
			<TodoPusher />
		</div>
	);
};
