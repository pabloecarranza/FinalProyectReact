import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB51y0lHbjUEOepup0-RzlvsHJYnFrR6pU",
  authDomain: "coderhousereact-ecf05.firebaseapp.com",
  projectId: "coderhousereact-ecf05",
  storageBucket: "coderhousereact-ecf05.appspot.com",
  messagingSenderId: "923859873344",
  appId: "1:923859873344:web:c14221cadb7e65133a39a5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
