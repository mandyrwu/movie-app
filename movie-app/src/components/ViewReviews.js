// import React, { useState, useEffect } from 'react';
// import './ViewReviews.css';
// import db from './firebase';

// const ViewReviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const reviewsCollection = db.collection('reviews');
//         const snapshot = await reviewsCollection.get();
//         const fetchedReviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setReviews(fetchedReviews);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div>
//       <h1>My Reviews</h1>
//       <ul>
//         {reviews.map(review => (
//           <li key={review.id}>
//             <h3>{review.title}</h3>
//             <p>Stars: {review.stars}</p>
//             <p>{review.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewReviews;

// src/components/ViewReview.js

// src/components/ViewReview.js

// import React, { useState, useEffect } from 'react';
// import db from './firebase';

// const ViewReviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const reviewsCollection = db.collection('reviews');
//         const snapshot = await reviewsCollection.get();
//         const fetchedReviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setReviews(fetchedReviews);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div>
//       <h1>Movie Reviews</h1>
//       {reviews.length > 0 ? (
//         <ul>
//           {reviews.map(review => (
//             <li key={review.id}>
//               <h3>{review.title}</h3>
//               <p>Stars: {review.stars}</p>
//               <p>{review.review}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No reviews available.</p>
//       )}
//     </div>
//   );
// };

// export default ViewReviews;

// ViewReviews.js

import React, { useState, useEffect } from 'react';
import './ViewReviews.css';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const ViewReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsCollection = collection(db, 'reviews');
        const snapshot = await getDocs(reviewsCollection);
        const fetchedReviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="view-reviews-container">
      <h1>My Reviews</h1>
      <ul className="reviews-list">
        {reviews.map(review => (
          <li key={review.id} className="review-item">
            <h3>{review.title}</h3>
            <p>Stars: {review.stars}</p>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReviews;

