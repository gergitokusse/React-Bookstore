import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/categories" element={<>Book Catagories</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
