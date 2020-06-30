import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import reducer from './store/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
