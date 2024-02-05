import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: "swift-homes-app.firebaseapp.com",
  projectId: "swift-homes-app",
  storageBucket: "swift-homes-app.appspot.com",
  messagingSenderId: process.env.FIREBASE_CONFIG_SENDER_ID,
  appId: process.env.FIREBASE_CONFIG_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
