// // src/components/MovieList.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error('Error fetching the movies:', error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className="movie-grid"> { }
//       {movies.map(movie => (
//         <div className="movie-item" key={movie.id}> { }
//           <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//           <h2>{movie.title}</h2>
//           <p>{movie.overview}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieList;

// src/components/MovieList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching the movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <div className="movie-item" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
