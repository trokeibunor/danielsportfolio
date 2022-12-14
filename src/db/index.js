// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATHHPhDfxj2iWR9ayhW1H07g36_6bhJME",
  authDomain: "daniel-s-portfolio-95c18.firebaseapp.com",
  projectId: "daniel-s-portfolio-95c18",
  storageBucket: "daniel-s-portfolio-95c18.appspot.com",
  messagingSenderId: "722944588054",
  appId: "1:722944588054:web:ee835fb96554f6e9a0f837",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
