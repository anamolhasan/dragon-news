// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7GmHTM6cE_6tSGRA6_C8GE9847bZPdTc",
  authDomain: "dragon-news-5638a.firebaseapp.com",
  projectId: "dragon-news-5638a",
  storageBucket: "dragon-news-5638a.firebasestorage.app",
  messagingSenderId: "1090008492610",
  appId: "1:1090008492610:web:4978e916607e8e88495bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app