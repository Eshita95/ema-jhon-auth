// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoxhAwm-MBXLMsH9_lph5jRLq578xU8IE",
  authDomain: "ema-jhon-simple-96f81.firebaseapp.com",
  projectId: "ema-jhon-simple-96f81",
  storageBucket: "ema-jhon-simple-96f81.appspot.com",
  messagingSenderId: "740178870067",
  appId: "1:740178870067:web:4cbb7155ea980f40db4846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;