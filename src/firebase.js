import firebase from "firebase";
import firebaseConfig from "./firebasevalue";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};