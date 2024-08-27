import styles from '../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES } from '../reducers/action-types';

export const FindBlock = () => {
	const dispatch = useDispatch();
	const sort = useSelector((state) => state.filterReducer.sort);

	const handleSort = () => {
		dispatch({ type: ACTION_TYPES.SORT });
	};

	const handleFilter = (target) => {
		dispatch({ type: ACTION_TYPES.FILTER, payload: target.value });
	};

	return (
		<div className={styles.findBlock}>
			<input
				placeholder="Find your todo!"
				className={styles.finder}
				onChange={({ target }) => handleFilter(target)}
			></input>
			<button
				onClick={handleSort}
				className={styles.filterBtn}
				style={{
					backgroundColor: sort ? 'lightgray' : 'buttonFace',
				}}
			>
				Аа
			</button>
		</div>
	);
};
