// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB57dxIzyKySs1hxhogiDIb1Ute-PuPtcA",
  authDomain: "chat-app-51e75.firebaseapp.com",
  projectId: "chat-app-51e75",
  storageBucket: "chat-app-51e75.appspot.com",
  messagingSenderId: "400279481381",
  appId: "1:400279481381:web:36d7dd5c88ca170d2c23cc",
  measurementId: "G-PGVVH0LG5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
