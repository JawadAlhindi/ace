import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyBkD1GwiD02jnA9vq8kpeZdshhqacFS1Bk",
  authDomain: "elearning-8.firebaseapp.com",
  databaseURL: "https://elearning-8-default-rtdb.firebaseio.com",
  projectId: "elearning-8",
  storageBucket: "elearning-8.appspot.com",
  messagingSenderId: "355338922258",
  appId: "1:355338922258:web:d1972828425429dadaebcb",
  measurementId: "G-V2WQH9X8LP",
});

var db = firebaseApp.firestore();

export { db };
