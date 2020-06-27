import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import App from './Components/App';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <React.StrictMode>
                <App />
            </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);
