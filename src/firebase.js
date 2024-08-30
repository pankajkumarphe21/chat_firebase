import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-d0d59.firebaseapp.com",
  projectId: "chat-d0d59",
  storageBucket: "chat-d0d59.appspot.com",
  messagingSenderId: "178371668668",
  appId: "1:178371668668:web:51b843e15d95ea9722feb9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();