import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { todoReducer } from './reducers/todo-reducer';
import { filterReducer } from './reducers/filter-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	todoReducer: todoReducer,
	filterReducer: filterReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
