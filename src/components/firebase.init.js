// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8VAB8p-mm4YFy-8nud8dwxqLIwtSRQd8",
  authDomain: "ema-john-simple2-eb9dc.firebaseapp.com",
  projectId: "ema-john-simple2-eb9dc",
  storageBucket: "ema-john-simple2-eb9dc.appspot.com",
  messagingSenderId: "506266747272",
  appId: "1:506266747272:web:96de1127e5ecb4ac73ba3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
