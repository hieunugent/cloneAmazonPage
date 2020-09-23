import firebase from "firebase";
import firebaseApps from "./firebasevalue";
require("dotenv").config();

const firebaseApp = firebaseApps ;


const auth = firebase.auth();
export {auth};