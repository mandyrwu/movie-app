// src/App.js

import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Movies</h1>
        <button className="add-review-button">Add Review</button>
      </header>
      <MovieList />
    </div>
  );
}

export default App;
