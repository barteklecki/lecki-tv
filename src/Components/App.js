import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../assets/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <CssBaseline />
                    <Header />
                    <Content />
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
