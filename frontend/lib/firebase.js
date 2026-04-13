// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkXcejzXcNbDocMGaOYnQPw5Ro8C-2_xw",
  authDomain: "fir-18ce2.firebaseapp.com",
  projectId: "fir-18ce2",
  storageBucket: "fir-18ce2.firebasestorage.app",
  messagingSenderId: "613073324976",
  appId: "1:613073324976:web:39e2b1e0a44c1a4a7de475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };