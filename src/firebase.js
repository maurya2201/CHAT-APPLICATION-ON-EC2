import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOs628zpi_vOxN6z-sUXoUIN_yvbeRia0",
  authDomain: "chat-app-bef2e.firebaseapp.com",
  projectId: "chat-app-bef2e",
  storageBucket: "chat-app-bef2e.appspot.com",
  messagingSenderId: "795660665461",
  appId: "1:795660665461:web:224bbae6e206ff5ef6ae3c",
  measurementId: "G-WBCTGZ2YEM"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
