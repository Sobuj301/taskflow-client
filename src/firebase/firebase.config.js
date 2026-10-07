// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMEp1NnG-NW8y7RYuoYhnVhQaGKDJx878",
  authDomain: "taskflow-ee3a1.firebaseapp.com",
  projectId: "taskflow-ee3a1",
  storageBucket: "taskflow-ee3a1.firebasestorage.app",
  messagingSenderId: "874486520908",
  appId: "1:874486520908:web:ea70c59b088f7c2e89a8e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
