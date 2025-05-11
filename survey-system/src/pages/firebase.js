// src/pages/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAeyF2xR107F1MIdsJWnXqsaT6Ub8TWBPQ",
  authDomain: "empresariales-c904e.firebaseapp.com",
  projectId: "empresariales-c904e",
  storageBucket: "empresariales-c904e.appspot.com",
  messagingSenderId: "306320586965",
  appId: "1:306320586965:web:2ed7ae3b93fc0828c34a5c",
  measurementId: "G-HXC82BB0HV"
};

// Inicializa la App de Firebase
const app = initializeApp(firebaseConfig);

// Exporta Auth
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile };

// Exporta Firestore (¡solo esta declaración de db!)
export const db = getFirestore(app);
