// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLcmzL57Pesh7QpAa1QyMfNd5k04IGNdo",
  authDomain: "red-onion-cp.firebaseapp.com",
  projectId: "red-onion-cp",
  storageBucket: "red-onion-cp.appspot.com",
  messagingSenderId: "1006471387729",
  appId: "1:1006471387729:web:364b9157f035bdbe647670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;