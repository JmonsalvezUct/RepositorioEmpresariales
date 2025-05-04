import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAeyF2xR107F1MIdsJWnXqsaT6Ub8TWBPQ",
    authDomain: "empresariales-c904e.firebaseapp.com",
    projectId: "empresariales-c904e",
    storageBucket: "empresariales-c904e.firebasestorage.app",
    messagingSenderId: "306320586965",
    appId: "1:306320586965:web:2ed7ae3b93fc0828c34a5c",
    measurementId: "G-HXC82BB0HV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile};