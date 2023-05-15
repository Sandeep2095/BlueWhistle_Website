
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCUdr_Qj8vZa0_3NyaJF6mGw7xl6W1YW5o",
  authDomain: "blue-whistle-advertising.firebaseapp.com",
  projectId: "blue-whistle-advertising",
  storageBucket: "blue-whistle-advertising.appspot.com",
  messagingSenderId: "141129565432",
  appId: "1:141129565432:web:8418fcde576ac87da6670d",
  measurementId: "G-M9GYFKC22R",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
