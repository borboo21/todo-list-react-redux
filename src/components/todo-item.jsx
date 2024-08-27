import styles from '../App.module.css';

import { useDispatch } from 'react-redux';
import { requestDeleteTodo, requestEditTodo } from '../hooks';
import { useState } from 'react';
import { ACTION_TYPES } from '../reducers';

export const TodoItem = ({ todo, complete }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [todoValue, setTodoValue] = useState(todo.title);
	const dispatch = useDispatch();

	const onDelete = () => {
		dispatch(requestDeleteTodo(todo.id));
	};

	const handleSave = () => {
		dispatch(requestEditTodo(todo.id, todoValue));
		setIsEdit(false);
	};

	const handleEditClick = () => {
		setIsEdit((prev) => !prev);
	};

	const handleCompleted = () => {
		dispatch({ type: ACTION_TYPES.COMPLETED, payload: todo.id });
	};

	return (
		<div className={styles.container} key={todo.id}>
			<div className={styles.list}>
				<input
					type="checkbox"
					className={styles.checkList}
					checked={complete}
					onChange={handleCompleted}
				></input>
				{isEdit ? (
					<input
						className={styles.editInput}
						onChange={({ target }) => setTodoValue(target.value)}
						value={todoValue}
					></input>
				) : (
					<span className={styles.listText}>{todo.title}</span>
				)}
			</div>
			<div className={styles.listBtn}>
				{isEdit ? (
					<button className={styles.saveInput} onClick={handleSave}>
						Save
					</button>
				) : (
					<>
						<button
							className={styles.todoBtn}
							onClick={() => onDelete(todo.id)}
						>
							Delete
						</button>
						<button
							className={styles.todoBtn}
							onClick={() => handleEditClick()}
						>
							Correct
						</button>
					</>
				)}
			</div>
		</div>
	);
};
