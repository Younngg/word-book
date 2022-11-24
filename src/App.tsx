import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/common/GlobalStyle';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import TopicDetail from './pages/TopicDetail';
import Snackbar from './components/common/Snackbar';
import { useAppSelector } from './store/hooks';

const App = () => {
  const snackbar = useAppSelector((state) => state.snackbarSlice);

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
      {snackbar.isShowing && <Snackbar key={Date.now()} />}
    </>
  );
};

export default App;
