import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUASt4Po8SQnrUC3QpXsUf3KlIhNdhS6w",
    authDomain: "react-fe-903af.firebaseapp.com",
    projectId: "react-fe-903af",
    storageBucket: "react-fe-903af.appspot.com",
    messagingSenderId: "540169774065",
    appId: "1:540169774065:web:015070cc589c339ea2da50",
    measurementId: "G-WR7E6KXESP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authService = getAuth();
export const db = getDatabase(app);
export default app;