// // import React, { Component } from 'react';

// // class AddReview extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       title: '',
// //       stars: '',
// //       review: '',
// //       submittedReview: null,
// //     };
// //   }

// //   handleChange = (event) => {
// //     this.setState({ [event.target.name]: event.target.value });
// //   };

// //   handleSubmit = (event) => {
// //     event.preventDefault();
// //     const { title, stars, review } = this.state;
// //     this.setState({ submittedReview: { title, stars, review } });
// //   };

// //   render() {
// //     const { title, stars, review, submittedReview } = this.state;

// //     if (submittedReview) {
// //       return (
// //         <div>
// //           <h2>You left a review!</h2>
// //           <p><strong>Movie Title:</strong> {submittedReview.title}</p>
// //           <p><strong>Number of Stars:</strong> {submittedReview.stars}</p>
// //           <p><strong>Review:</strong> {submittedReview.review}</p>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div>
// //         <h2>Add Review</h2>
// //         <form onSubmit={this.handleSubmit}>
// //           <div>
// //             <label>
// //               Movie Title:
// //               <input
// //                 type="text"
// //                 name="title"
// //                 value={title}
// //                 onChange={this.handleChange}
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <div>
// //             <label>
// //               Number of Stars:
// //               <input
// //                 type="number"
// //                 name="stars"
// //                 value={stars}
// //                 onChange={this.handleChange}
// //                 min="1"
// //                 max="5"
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <div>
// //             <label>
// //               Review Description:
// //               <textarea
// //                 name="review"
// //                 value={review}
// //                 onChange={this.handleChange}
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <button type="submit">Submit Review</button>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default AddReview;

// // // import React, { Component } from 'react';
// // // import { db } from './firebase'; // Adjust the import path if necessary

// // // class AddReview extends Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       title: '',
// // //       stars: '',
// // //       review: '',
// // //       submittedReview: null,
// // //     };
// // //   }

// // //   handleChange = (event) => {
// // //     this.setState({ [event.target.name]: event.target.value });
// // //   };

// // //   handleSubmit = async (event) => {
// // //     event.preventDefault();
// // //     const { title, stars, review } = this.state;
// // //     this.setState({ submittedReview: { title, stars, review } });

// // //     try {
// // //       await db.collection('reviews').add({
// // //         title,
// // //         stars: parseInt(stars), // Ensure stars is saved as a number
// // //         review,
// // //       });
// // //       console.log('Review added successfully to Firestore!');
// // //     } catch (error) {
// // //       console.error('Error adding review to Firestore:', error);
// // //     }
// // //   };

// // //   render() {
// // //     const { title, stars, review, submittedReview } = this.state;

// // //     if (submittedReview) {
// // //       return (
// // //         <div>
// // //           <h2>You left a review!</h2>
// // //           <p><strong>Movie Title:</strong> {submittedReview.title}</p>
// // //           <p><strong>Number of Stars:</strong> {submittedReview.stars}</p>
// // //           <p><strong>Review:</strong> {submittedReview.review}</p>
// // //         </div>
// // //       );
// // //     }

// // //     return (
// // //       <div>
// // //         <h2>Add Review</h2>
// // //         <form onSubmit={this.handleSubmit}>
// // //           <div>
// // //             <label>
// // //               Movie Title:
// // //               <input
// // //                 type="text"
// // //                 name="title"
// // //                 value={title}
// // //                 onChange={this.handleChange}
// // //                 required
// // //               />
// // //             </label>
// // //           </div>
// // //           <div>
// // //             <label>
// // //               Number of Stars:
// // //               <input
// // //                 type="number"
// // //                 name="stars"
// // //                 value={stars}
// // //                 onChange={this.handleChange}
// // //                 min="1"
// // //                 max="5"
// // //                 required
// // //               />
// // //             </label>
// // //           </div>
// // //           <div>
// // //             <label>
// // //               Review Description:
// // //               <textarea
// // //                 name="review"
// // //                 value={review}
// // //                 onChange={this.handleChange}
// // //                 required
// // //               />
// // //             </label>
// // //           </div>
// // //           <button type="submit">Submit Review</button>
// // //         </form>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default AddReview;

// // import React, { Component } from 'react';
// // import db from './firebase'; // Ensure the import path is correct
// // import './AddReview.css';

// // class AddReview extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       title: '',
// //       stars: '',
// //       review: '',
// //       submittedReview: null,
// //     };
// //   }

// //   handleChange = (event) => {
// //     this.setState({ [event.target.name]: event.target.value });
// //   };

// //   handleSubmit = async (event) => {
// //     event.preventDefault();

// //     console.log('Submitting review:', { title, stars, review }); // Check the review data
// //     const newReview = { title, stars: parseInt(stars, 10), review };
// //     console.log('New review:', newReview); // Check the formatted review data

// //     const { title, stars, review } = this.state;
// //     this.setState({ submittedReview: { title, stars, review } });

// //     try {
// //       await db.collection('reviews').add({
// //         title,
// //         stars: parseInt(stars, 10), // Ensure stars is saved as a number
// //         review,
// //       });
// //       console.log('Review added successfully to Firestore!');
// //     } catch (error) {
// //       console.error('Error adding review to Firestore:', error);
// //     }
// //   };



// //   render() {
// //     const { title, stars, review, submittedReview } = this.state;

// //     if (submittedReview) {
// //       return (
// //         <div>
// //           <h2>You left a review!</h2>
// //           <p><strong>Movie Title:</strong> {submittedReview.title}</p>
// //           <p><strong>Number of Stars:</strong> {submittedReview.stars}</p>
// //           <p><strong>Review:</strong> {submittedReview.review}</p>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="add-review-container">
// //         <h2>Add Review</h2>
// //         <form className="add-review-form" onSubmit={this.handleSubmit}>
// //           <div>
// //             <label>
// //               Movie Title:
// //               <input
// //                 type="text"
// //                 name="title"
// //                 value={title}
// //                 onChange={this.handleChange}
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <div>
// //             <label>
// //               Number of Stars:
// //               <input
// //                 type="number"
// //                 name="stars"
// //                 value={stars}
// //                 onChange={this.handleChange}
// //                 min="1"
// //                 max="5"
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <div>
// //             <label>
// //               Review Description:
// //               <textarea
// //                 name="review"
// //                 value={review}
// //                 onChange={this.handleChange}
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <button type="submit">Submit Review</button>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default AddReview;


// // AFTER IMPLEMENTING THE DROP DOWN!!

// // import React, { useState, useEffect } from 'react';
// // import db from './firebase'; // Ensure the import path is correct
// // import axios from 'axios';
// // import './AddReview.css';

// // const AddReview = () => {
// //   const [title, setTitle] = useState('');
// //   const [stars, setStars] = useState('');
// //   const [review, setReview] = useState('');
// //   const [submittedReview, setSubmittedReview] = useState(null);
// //   const [movies, setMovies] = useState([]); // State to store movie titles

// //   useEffect(() => {
// //     const fetchMovies = async () => {
// //       try {
// //         const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
// //         const movieTitles = response.data.results.map(movie => movie.title);
// //         setMovies(movieTitles);
// //       } catch (error) {
// //         console.error('Error fetching movies:', error);
// //       }
// //     };

// //     fetchMovies();
// //   }, []);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     if (name === 'title') {
// //       setTitle(value);
// //     } else if (name === 'stars') {
// //       setStars(value);
// //     } else if (name === 'review') {
// //       setReview(value);
// //     }
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     const newReview = { title, stars: parseInt(stars, 10), review };
// //     setSubmittedReview(newReview);

// //     try {
// //       await db.collection('reviews').add(newReview);
// //       console.log('Review added successfully to Firestore!');
// //     } catch (error) {
// //       console.error('Error adding review to Firestore:', error);
// //     }
// //   };

// //   if (submittedReview) {
// //     return (
// //       <div>
// //         <h2>You left a review!</h2>
// //         <p><strong>Movie Title:</strong> {submittedReview.title}</p>
// //         <p><strong>Number of Stars:</strong> {submittedReview.stars}</p>
// //         <p><strong>Review:</strong> {submittedReview.review}</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="add-review-container">
// //       <h2>Add Review</h2>
// //       <form className="add-review-form" onSubmit={handleSubmit}>
// //         <div>
// //           <label>
// //             Movie Title:
// //             <select name="title" value={title} onChange={handleChange} required>
// //               <option value="" disabled>Select a movie</option>
// //               {movies.map((movie, index) => (
// //                 <option key={index} value={movie}>{movie}</option>
// //               ))}
// //             </select>
// //           </label>
// //         </div>
// //         <div>
// //           <label>
// //             Number of Stars:
// //             <input
// //               type="number"
// //               name="stars"
// //               value={stars}
// //               onChange={handleChange}
// //               min="1"
// //               max="5"
// //               required
// //             />
// //           </label>
// //         </div>
// //         <div>
// //           <label>
// //             Review Description:
// //             <textarea
// //               name="review"
// //               value={review}
// //               onChange={handleChange}
// //               required
// //             />
// //           </label>
// //         </div>
// //         <button type="submit">Submit Review</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddReview;

// // REVERTTTT
// // AddReview.js
// // import React, { Component } from 'react';
// // import db from './firebase'; // Ensure the import path is correct
// // import { collection, addDoc } from 'firebase/firestore';
// // import './AddReview.css';

// // class AddReview extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       title: '',
// //       stars: '',
// //       review: '',
// //       submittedReview: null,
// //     };
// //   }

// //   handleChange = (event) => {
// //     this.setState({ [event.target.name]: event.target.value });
// //   };

// //   handleSubmit = async (event) => {
// //     event.preventDefault();
// //     const { title, stars, review } = this.state;
// //     this.setState({ submittedReview: { title, stars, review } });

// //     try {
// //       await addDoc(collection(db, 'reviews'), {
// //         title,
// //         stars: parseInt(stars, 10), // Ensure stars is saved as a number
// //         review,
// //       });
// //       console.log('Review added successfully to Firestore!');
// //     } catch (error) {
// //       console.error('Error adding review to Firestore:', error);
// //     }
// //   };

// //   render() {
// //     const { title, stars, review, submittedReview } = this.state;

// //     if (submittedReview) {
// //       return (
// //         <div>
// //           <h2>You left a review!</h2>
// //           <p><strong>Movie Title:</strong> {submittedReview.title}</p>
// //           <p><strong>Number of Stars:</strong> {submittedReview.stars}</p>
// //           <p><strong>Review:</strong> {submittedReview.review}</p>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="add-review-container">
// //         <h2>Add Review</h2>
// //         <form className="add-review-form" onSubmit={this.handleSubmit}>
// //           <div>
// //             <label>
// //               Movie Title:
// //               <input
// //                 type="text"
// //                 name="title"
// //                 value={title}
// //                 onChange={this.handleChange}
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <div>
// //             <label>
// //               Number of Stars:
// //               <input
// //                 type="number"
// //                 name="stars"
// //                 value={stars}
// //                 onChange={this.handleChange}
// //                 min="1"
// //                 max="5"
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <div>
// //             <label>
// //               Review Description:
// //               <textarea
// //                 name="review"
// //                 value={review}
// //                 onChange={this.handleChange}
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <button type="submit">Submit Review</button>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default AddReview;

// import React, { Component } from 'react';
// import db from './firebase'; // Ensure the import path is correct
// import { collection, addDoc } from 'firebase/firestore';
// import axios from 'axios';
// import './AddReview.css';

// class AddReview extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       stars: '',
//       review: '',
//       submittedReview: null,
//       movieTitles: [], // State to store movie titles
//     };
//   }

//   componentDidMount() {
//     this.fetchMovies();
//   }

//   fetchMovies = async () => {
//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
//       const movieTitles = response.data.results.map(movie => movie.title);
//       this.setState({ movieTitles });
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const { title, stars, review } = this.state;
//     this.setState({ submittedReview: { title, stars, review } });

//     try {
//       await addDoc(collection(db, 'reviews'), {
//         title,
//         stars: parseInt(stars, 10), // Ensure stars is saved as a number
//         review,
//       });
//       console.log('Review added successfully to Firestore!');
//     } catch (error) {
//       console.error('Error adding review to Firestore:', error);
//     }
//   };

//   render() {
//     const { title, stars, review, submittedReview, movieTitles } = this.state;

//     if (submittedReview) {
//       return (
//         <div>
//           <h2>You left a review!</h2>
//           <p><strong>Movie Title:</strong> {submittedReview.title}</p>
//           <p><strong>Number of Stars:</strong> {submittedReview.stars}</p>
//           <p><strong>Review:</strong> {submittedReview.review}</p>
//         </div>
//       );
//     }

//     return (
//       <div className="add-review-container">
//         <h2>Add Review</h2>
//         <form className="add-review-form" onSubmit={this.handleSubmit}>
//           <div>
//             <label>
//               Movie Title:
//               <select
//                 name="title"
//                 value={title}
//                 onChange={this.handleChange}
//                 required
//               >
//                 <option value="" disabled>Select a movie</option>
//                 {movieTitles.map((movieTitle, index) => (
//                   <option key={index} value={movieTitle}>{movieTitle}</option>
//                 ))}
//               </select>
//             </label>
//           </div>
//           <div>
//             <label>
//               Number of Stars:
//               <input
//                 type="number"
//                 name="stars"
//                 value={stars}
//                 onChange={this.handleChange}
//                 min="1"
//                 max="5"
//                 required
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Review Description:
//               <textarea
//                 name="review"
//                 value={review}
//                 onChange={this.handleChange}
//                 required
//               />
//             </label>
//           </div>
//           <button type="submit">Submit Review</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddReview;

import React, { Component } from 'react';
import db from './firebase'; // Ensure the import path is correct
import { collection, addDoc } from 'firebase/firestore';
import axios from 'axios';
import './AddReview.css';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      stars: '',
      review: '',
      submittedReview: null,
      movieTitles: [], // State to store movie titles
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
      const movieTitles = response.data.results.map(movie => movie.title);
      this.setState({ movieTitles });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, stars, review } = this.state;
    this.setState({ submittedReview: { title, stars, review } });

    try {
      await addDoc(collection(db, 'reviews'), {
        title,
        stars: parseInt(stars, 10), // Ensure stars is saved as a number
        review,
      });
      console.log('Review added successfully to Firestore!');
    } catch (error) {
      console.error('Error adding review to Firestore:', error);
    }
  };

  render() {
    const { title, stars, review, submittedReview, movieTitles } = this.state;

    if (submittedReview) {
      return (
        <div>
          <h2>You left a review!</h2>
          <p><strong>Movie Title:</strong> {submittedReview.title}</p>
          <p><strong>Number of Stars:</strong> {submittedReview.stars}</p>
          <p><strong>Review:</strong> {submittedReview.review}</p>
        </div>
      );
    }

    return (
      <div className="add-review-container">
        <h2>Add Review</h2>
        <form className="add-review-form" onSubmit={this.handleSubmit}>
          <div>
            <label>
              Movie Title:
              <select
                name="title"
                value={title}
                onChange={this.handleChange}
                required
              >
                <option value="" disabled>Select a movie</option>
                {movieTitles.map((movieTitle, index) => (
                  <option key={index} value={movieTitle}>{movieTitle}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Number of Stars:
              <input
                type="number"
                name="stars"
                value={stars}
                onChange={this.handleChange}
                min="1"
                max="5"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Review Description:
              <textarea
                name="review"
                value={review}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    );
  }
}

export default AddReview;
