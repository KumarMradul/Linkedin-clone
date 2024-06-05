// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmvVoUYTMiWXsN_pImr4J_6-Y_hMKno9U",
  authDomain: "linkedin-clone-effa0.firebaseapp.com",
  projectId: "linkedin-clone-effa0",
  storageBucket: "linkedin-clone-effa0.appspot.com",
  messagingSenderId: "810982474391",
  appId: "1:810982474391:web:1486625033f64164cb9fd2",
  measurementId: "G-K6CG7LSKFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const storage = getStorage(app)
export { auth, app, firestore, storage}