import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

import { Provider } from 'react-redux';
import store from './store';

//listen the redux state change and update localStorage of browser synchronized
store.subscribe(() => {
    //console.log(store.getState());
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
