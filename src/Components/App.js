import React from 'react';
import './App.css';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../assets/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Content />
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
