import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BookList from './components/bookList';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App shadow-lg">
      <BrowserRouter>
        <Navigation />
        <BookList />
      </BrowserRouter>
    </div>
  );
}

export default App;
