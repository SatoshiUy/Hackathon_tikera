// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_APIKEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECTID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
//   appId: process.env.NEXT_PUBLIC_APPID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCNLQbLBc09SdW2cVoa-p5k2VU7aqvJNCQ",
  authDomain: "tikera-8fa44.firebaseapp.com",
  projectId: "tikera-8fa44",
  storageBucket: "tikera-8fa44.appspot.com",
  messagingSenderId: "222627878456",
  appId: "1:222627878456:web:d4e071ae9ea8b9dfb578cd",
  measurementId: "G-7NS8FLQDD4"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig, "Tikera");
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();


export {db, auth, provider, storage}



// Your web app's Firebase configuration