import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TopTenSongs from './pages/topTenSongs';
import AddSong from './pages/addSong';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/topTenSongs" element={<TopTenSongs />} />
        <Route path="/addSong" element={<AddSong />} />
      </Routes>
  </BrowserRouter>
);
