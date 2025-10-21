import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwVkwUU3ijvQvrIOryWYrLjzwpV0CWgKE",
  authDomain: "jagruti-clinic.firebaseapp.com",
  projectId: "jagruti-clinic",
  storageBucket: "jagruti-clinic.firebasestorage.app",
  messagingSenderId: "601251457207",
  appId: "1:601251457207:web:3fe78febf858faf7360532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
