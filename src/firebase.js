// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Batch12 Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCk-WM4XNFgX1I8ZZqCLhwIORvxx1u-wz4",
  authDomain: "twitter-app-batch12.firebaseapp.com",
  projectId: "twitter-app-batch12",
  storageBucket: "twitter-app-batch12.firebasestorage.app",
  messagingSenderId: "120812723775",
  appId: "1:120812723775:web:213d4f1cf98be598bee28a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
