import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwawCGgUGGpQbANR5Af-Fud0lM-bjdcE4",
  authDomain: "mychatapp-fbb0a.firebaseapp.com",
  projectId: "mychatapp-fbb0a",
  storageBucket: "mychatapp-fbb0a.appspot.com",
  messagingSenderId: "692108416944",
  appId: "1:692108416944:web:48b173d38a80824d406875"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
