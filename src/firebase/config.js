import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBow530j2wXcbboqilw_aSTLNH8bH_gjgs",
  authDomain: "imoney-24c6e.firebaseapp.com",
  projectId: "imoney-24c6e",
  storageBucket: "imoney-24c6e.appspot.com",
  messagingSenderId: "73899961320",
  appId: "1:73899961320:web:6f0aac99d3bf19c57d925d",
  measurementId: "G-96QVK8JLC8",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, auth };
