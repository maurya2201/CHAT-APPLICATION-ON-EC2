import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB57dxIzyKySs1hxhogiDIb1Ute-PuPtcA",
  authDomain: "chat-app-51e75.firebaseapp.com",
  projectId: "chat-app-51e75",
  storageBucket: "chat-app-51e75.appspot.com",
  messagingSenderId: "400279481381",
  appId: "1:400279481381:web:36d7dd5c88ca170d2c23cc",
  measurementId: "G-PGVVH0LG5C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
