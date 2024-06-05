// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import firebaseConfig from "./firebaseConfig";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get Firestore and Auth services
// export const db = getFirestore(app);
// export const auth = getAuth(app);

// firebase.js



import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from "./firebaseConfig";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;

