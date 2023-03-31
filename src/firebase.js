import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyCPKEHmNaJjdQg_4uihJMU9RhaJJRse4R8",
//   authDomain: "chat-b281c.firebaseapp.com",
//   projectId: "chat-b281c",
//   storageBucket: "chat-b281c.appspot.com",
//   messagingSenderId: "833060935203",
//   appId: "1:833060935203:web:a51d9c942071e0b2c98396"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCq51SlxDLntXSz6L8r_bwJ_QQ6bdb3JdA",
    authDomain: "chat3-aaee1.firebaseapp.com",
    projectId: "chat3-aaee1",
    storageBucket: "chat3-aaee1.appspot.com",
    messagingSenderId: "762277979454",
    appId: "1:762277979454:web:707c4a913a04dcbac8f86f"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
