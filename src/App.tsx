import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './common/GlobalStyle';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
