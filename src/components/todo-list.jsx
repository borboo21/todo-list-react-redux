import styles from '../App.module.css';
import { TodoItem } from './todo-item';
import { useSelector } from 'react-redux';

export const TodoList = ({ displayedTasks }) => {
	const isLoading = useSelector((state) => state.todoReducer.isLoading);

	return (
		<div className={styles.todoList}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				displayedTasks.map((todo) => (
					<TodoItem key={todo.id} todo={todo} complete={todo.complete} />
				))
			)}
		</div>
	);
};
