// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZTwT9EX5GaFybxBZdKqiDBNYQ6jmBsvQ",
  authDomain: "movieverse-c7725.firebaseapp.com",
  projectId: "movieverse-c7725",
  storageBucket: "movieverse-c7725.appspot.com",
  messagingSenderId: "780200673657",
  appId: "1:780200673657:web:2f665695f1df888cd9efa8",
  measurementId: "G-V2DCYD7XC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const MoviesRef = collection(db,"Movies");  // movies ka reference
export const usersRef = collection(db, "users");   // users ka reference

export default app;