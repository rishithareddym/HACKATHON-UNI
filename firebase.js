import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhPD1oscC17rMEfEpdTNK2diauR87Xc9I",
  authDomain: "university-a5db2.firebaseapp.com",
  projectId: "university-a5db2",
  storageBucket: "university-a5db2.firebasestorage.app",
  messagingSenderId: "240896844529",
  appId: "1:240896844529:web:d93faca36d7d1f6bf43f50",
  measurementId: "G-QB57TF9Q2J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
