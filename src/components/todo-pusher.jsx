import styles from '../App.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { requestAddTodo } from '../hooks';

export const TodoPusher = () => {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (target) => {
		target.preventDefault();
		const newTodo = {
			id: Date.now().toString(),
			title,
			complete: false,
		};
		dispatch(requestAddTodo(newTodo));
		setTitle('');
	};

	return (
		<form className={styles.todoPusher} onSubmit={handleSubmit}>
			<input
				className={styles.todoText}
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="What you wanna do?"
			></input>
			<button className={styles.todoAdd} disabled={!title} type="submit">
				Add
			</button>
		</form>
	);
};
