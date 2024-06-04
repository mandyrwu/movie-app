// import React, { Component } from 'react';

// class AddReview extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       stars: '',
//       review: '',
//       submittedReview: null,
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { title, stars, review } = this.state;
//     this.setState({ submittedReview: { title, stars, review } });
//   };

//   render() {
//     const { title, stars, review, submittedReview } = this.state;

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
//       <div>
//         <h2>Add Review</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>
//               Movie Title:
//               <input
//                 type="text"
//                 name="title"
//                 value={title}
//                 onChange={this.handleChange}
//                 required
//               />
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

// // import React, { Component } from 'react';
// // import { db } from './firebase'; // Adjust the import path if necessary

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
// //       await db.collection('reviews').add({
// //         title,
// //         stars: parseInt(stars), // Ensure stars is saved as a number
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

import React, { Component } from 'react';
import db from './firebase'; // Ensure the import path is correct
import './AddReview.css';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      stars: '',
      review: '',
      submittedReview: null,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, stars, review } = this.state;
    this.setState({ submittedReview: { title, stars, review } });

    try {
      await db.collection('reviews').add({
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
    const { title, stars, review, submittedReview } = this.state;

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
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
                required
              />
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
