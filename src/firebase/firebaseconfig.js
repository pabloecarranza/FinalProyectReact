// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app" 
import { getFirestore } from 'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg9bGd5oMJCzzl6YRGYQMKHGe6V84FS9s",
  authDomain: "e-commerce-ac8a1.firebaseapp.com",
  projectId: "e-commerce-ac8a1",
  storageBucket: "e-commerce-ac8a1.appspot.com",
  messagingSenderId: "228706732403",
  appId: "1:228706732403:web:84a614274cdc88076f9d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db