import {getDatabase} from 'firebase/database'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpQuarni71EeMHzYrMJ55mmG9fUahdauM",
  authDomain: "tic-tac-toe-4fba0.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-4fba0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tic-tac-toe-4fba0",
  storageBucket: "tic-tac-toe-4fba0.appspot.com",
  messagingSenderId: "742316989928",
  appId: "1:742316989928:web:857d79d4a5c034485d985d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db=getDatabase()

export {db,app}