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

// import React from 'react';
// import { useState } from 'react';
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

//   const handleHeaderClick = () => {
//     setCurrentPage('home');
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 onClick={handleHeaderClick} style={{ cursor: 'pointer' }}>Popular Movies</h1>
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


// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MovieList from './components/MovieList';
// import MovieDetail from './components/MovieDetail';
// import AddReview from './components/AddReview';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MovieList />} />
//         <Route path="/movie/:id" element={<MovieDetail />} />
//         <Route path="/add-review" element={<AddReview />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
// import './App.css';
// import MovieList from './components/MovieList';
// import AddReview from './components/AddReview';
// import ViewReviews from './components/ViewReviews';
// import MovieDetail from './components/MovieDetail'; // Import MovieDetail component

// function App() {
//   return (
//     <Router> {/* Wrap your components with BrowserRouter */}
//       <div className="App">
//       <header className="App-header">
//          <h1 onClick={handleHeaderClick} style={{ cursor: 'pointer' }}>Popular Movies</h1>
//          <div className='buttons'>
//            <button className="view-reviews-button" onClick={handleViewReviewsClick}>View Reviews</button>
//            <button className="add-review-button" onClick={handleAddReviewClick}>Add Review</button>
//          </div>
//        </header>
//         <Switch> {/* Switch component to render the first matching route */}
//           <Route path="/" exact component={MovieList} /> {/* MovieList component for the home page */}
//           <Route path="/addReview" component={AddReview} /> {/* AddReview component */}
//           <Route path="/viewReviews" component={ViewReviews} /> {/* ViewReviews component */}
//           <Route path="/movie/:id" component={MovieDetail} /> {/* MovieDetail component with dynamic route */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


// App.js
///THIS WORKSS
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

