// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAlQKlOhNL9FdBN747YkFmEKpiyPWSzMk",
  authDomain: "myportfolio-1f7f9.firebaseapp.com",
  projectId: "myportfolio-1f7f9",
  storageBucket: "myportfolio-1f7f9.appspot.com",
  messagingSenderId: "717016688619",
  appId: "1:717016688619:web:69587ee39bc3d7468e9bae",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
