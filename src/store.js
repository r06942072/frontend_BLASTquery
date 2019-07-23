import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import undoableReducer from './reducers'
import { fetchList } from './actions/formAction';

const persistedState = localStorage.getItem('reduxState') ?
    JSON.parse(localStorage.getItem('reduxState')) :
    fetchList();

const middleware = [thunk];

const store = createStore(
    undoableReducer,
    persistedState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;