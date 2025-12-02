import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAT-mGoMNTFHFCgJrXRhPvHTksi0WyR01g",
  authDomain: "tools-assignment-3.firebaseapp.com",
  projectId: "tools-assignment-3",
  storageBucket: "tools-assignment-3.firebasestorage.app",
  messagingSenderId: "612878775322",
  appId: "1:612878775322:web:7b559c823049ef2e9b0da3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);