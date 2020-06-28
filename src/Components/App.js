import React from 'react';
import './App.css';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
        <CssBaseline />
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
