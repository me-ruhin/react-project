// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2sWa32sLJkoiRfsKNy3BtWyaoJH1s9dU",
  authDomain: "react-commerce-7f7b0.firebaseapp.com",
  projectId: "react-commerce-7f7b0",
  storageBucket: "react-commerce-7f7b0.appspot.com",
  messagingSenderId: "366297968749",
  appId: "1:366297968749:web:6f68808cd20ecd82c74f64",
  measurementId: "G-87GVSHPH5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export default fireDB;