import firebase from "firebase";
require("dotenv").config();
const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyAfakgn2ej9sr_Bnd0NtOieHJBIuOIbgMk",
  apikey:process.env.FIREBASE_API,
  authDomain: "clone-a8485.firebaseapp.com",
  databaseURL: "https://clone-a8485.firebaseio.com",
  projectId: "clone-a8485",
  storageBucket: "clone-a8485.appspot.com",
  messagingSenderId: "157538497918",
  appId: "1:157538497918:web:5ab2bd6446e9188d05af2f",
  measurementId: "G-FQHQT8RC0Z",
});

const auth = firebaseApp.firestore();
export {auth};