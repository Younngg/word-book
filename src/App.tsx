import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/common/GlobalStyle';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import TopicDetail from './pages/TopicDetail';
import Snackbar from './components/common/Snackbar';

interface SnackbarObj {
  message: string;
  isShown: boolean;
}

const App = () => {
  const [snackbar, setSnackbar] = useState<SnackbarObj>({
    message: '',
    isShown: false,
  });

  console.log(snackbar);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home setSnackbar={setSnackbar} />} />
          <Route path='/topics/:id' element={<TopicDetail />} />
        </Routes>
      </BrowserRouter>
      {snackbar.isShown && (
        <Snackbar
          message={snackbar.message}
          setSnackbar={setSnackbar}
          snackbar={snackbar}
        />
      )}
      {}
    </>
  );
};

export default App;
