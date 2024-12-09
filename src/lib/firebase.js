import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDm6BtRnq5AfVie6_HCeUtz1FIIDOHzxq0",
  authDomain: "social-media-app-7c14b.firebaseapp.com",
  projectId: "social-media-app-7c14b",
  storageBucket: "social-media-app-7c14b.appspot.com",
  messagingSenderId: "845049344329",
  appId: "1:845049344329:web:6f4f3ab271b180f567aa98"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);