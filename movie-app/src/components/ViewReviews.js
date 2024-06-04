import React, { useState, useEffect } from 'react';
import './ViewReviews.css';
import db from './firebase';

const ViewReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsCollection = db.collection('reviews');
        const snapshot = await reviewsCollection.get();
        const fetchedReviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>My Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.title}</h3>
            <p>Stars: {review.stars}</p>
            <p>{review.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReviews;