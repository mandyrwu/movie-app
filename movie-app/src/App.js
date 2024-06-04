// import React, { useState } from 'react';
// import './App.css';
// import MovieList from './components/MovieList';
// import AddReview from './components/AddReview';
// import ViewReviews from './components/ViewReviews';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const handleAddReviewClick = () => {
//     setCurrentPage('addReview');
//   };

//   const handleViewReviewsClick = () => {
//     setCurrentPage('viewReviews');
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Popular Movies</h1>
//         <div className='buttons'>
//           <button className="view-reviews-button" onClick={handleViewReviewsClick}>View Reviews</button>
//           <button className="add-review-button" onClick={handleAddReviewClick}>Add Review</button>
//         </div>
//       </header>
//       {currentPage === 'home' && <MovieList />}
//       {currentPage === 'addReview' && <AddReview />}
//       {currentPage === 'viewReviews' && <ViewReviews />}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import AddReview from './components/AddReview';
import ViewReviews from './components/ViewReviews';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleAddReviewClick = () => {
    setCurrentPage('addReview');
  };

  const handleViewReviewsClick = () => {
    setCurrentPage('viewReviews');
  };

  const handleHeaderClick = () => {
    setCurrentPage('home');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={handleHeaderClick} style={{ cursor: 'pointer' }}>Popular Movies</h1>
        <div className='buttons'>
          <button className="view-reviews-button" onClick={handleViewReviewsClick}>View Reviews</button>
          <button className="add-review-button" onClick={handleAddReviewClick}>Add Review</button>
        </div>
      </header>
      {currentPage === 'home' && <MovieList />}
      {currentPage === 'addReview' && <AddReview />}
      {currentPage === 'viewReviews' && <ViewReviews />}
    </div>
  );
}

export default App;
