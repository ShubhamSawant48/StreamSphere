// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACKuk91pwpMZ5kG9lNNg4zICBLgNAbtXw",
  authDomain: "streamsphere-72547.firebaseapp.com",
  projectId: "streamsphere-72547",
  storageBucket: "streamsphere-72547.firebasestorage.app",
  messagingSenderId: "988591475187",
  appId: "1:988591475187:web:eb801aeadfc91baf962a86",
  measurementId: "G-3QPLR2FC1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
