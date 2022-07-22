import React from 'react';
import Data from './features/data/Data';
import './App.css';
import EachData from './features/data/EachData'

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data />}/>
        <Route path=":index" element={<EachData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
