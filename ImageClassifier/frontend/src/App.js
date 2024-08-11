import React from 'react';
import './App.css';
import Classifier from './components/Classifier/Classifier';
import ImageList from './components/ImageList/ImageList';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Classifier />} />
          <Route path='/history' element={<ImageList />} />
        </Routes>
        <label style={{ marginTop: '30px' }} />Copyright 2024<br />
        <label style={{ marginTop: '20px',marginBottom: '10px' }} />in context of ML/DL project

      </div>
    </BrowserRouter>
  );
}

export default App;
