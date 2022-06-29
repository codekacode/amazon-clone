// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzjM5zn2wbYxzywEy6f4cidTvGQqLZMlQ",
  authDomain: "clone-24cfc.firebaseapp.com",
  projectId: "clone-24cfc",
  storageBucket: "clone-24cfc.appspot.com",
  messagingSenderId: "1090233501511",
  appId: "1:1090233501511:web:612e902a57a6fe46e06e62",
  measurementId: "G-12CBDNH2SC"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };