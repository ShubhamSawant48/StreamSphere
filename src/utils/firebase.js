// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX8Z99NHlxzwDq7Cp-fdyRy0yrnJpyTVQ",
  authDomain: "streamsphere-bcf04.firebaseapp.com",
  projectId: "streamsphere-bcf04",
  storageBucket: "streamsphere-bcf04.firebasestorage.app",
  messagingSenderId: "741562679481",
  appId: "1:741562679481:web:b21772d8f6036957419b68",
  measurementId: "G-B5F7JB9DM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
