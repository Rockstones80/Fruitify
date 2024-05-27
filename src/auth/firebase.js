// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6InewKbk-JNAEb5pb1lvuqd3qwVM1liU",
  authDomain: "class-store-c5155.firebaseapp.com",
  projectId: "class-store-c5155",
  storageBucket: "class-store-c5155.appspot.com",
  messagingSenderId: "565722238295",
  appId: "1:565722238295:web:be7d885f3f261dd0074212",
  measurementId: "G-8F4HSCKWRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()