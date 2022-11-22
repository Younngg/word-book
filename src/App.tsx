import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './common/GlobalStyle';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import TopicDetail from './pages/TopicDetail';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/topics/:id' element={<TopicDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
