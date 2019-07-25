import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let persistedState = {};
if (localStorage.getItem('reduxState') !== null) {
    persistedState = JSON.parse(localStorage.getItem('reduxState'));
}

//const persistedState = localStorage.getItem('reduxState') ? reduxStateFromLocalStorage :{};

const middleware = [thunk];

const storeEnhancer = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    rootReducer,
    persistedState,
    storeEnhancer
);

export default store;