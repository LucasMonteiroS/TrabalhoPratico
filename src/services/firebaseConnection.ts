// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Fiirebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXhk-Li7m7PebRQSnjzbR29HgslowCCuY",
  authDomain: "react-contextapi-997dc.firebaseapp.com",
  projectId: "react-contextapi-997dc",
  storageBucket: "react-contextapi-997dc.appspot.com",
  messagingSenderId: "975153911929",
  appId: "1:975153911929:web:77fb91811bb596eace1ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)

export {auth, db}