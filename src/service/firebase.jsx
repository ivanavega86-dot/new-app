// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: "new-app-1231c.firebaseapp.com",
  projectId: "new-app-1231c",
  storageBucket: "new-app-1231c.firebasestorage.app",
  messagingSenderId: "24300627035",
  appId: "1:24300627035:web:feb743caef4cf4d4ac8b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)