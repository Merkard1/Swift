import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS8dGaq0WH4y7rBeA2y05R96WIFeAgU1s",
  authDomain: "swift-homes-app.firebaseapp.com",
  projectId: "swift-homes-app",
  storageBucket: "swift-homes-app.appspot.com",
  messagingSenderId: "930511307815",
  appId: "1:930511307815:web:6a310a6cf3f861769a7a02",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
